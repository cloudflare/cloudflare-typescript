#!/usr/bin/env -S npm run tsn -T

/*
 * This is an example of how to upload a Worker with Static Assets and serve them from a Worker
 * https://developers.cloudflare.com/workers/static-assets/direct-upload
 *
 * Generate an API token: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/
 * (Not Global API Key!)
 *
 * Find your account id: https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/
 *
 * Set these environment variables:
 * - CLOUDFLARE_API_TOKEN
 * - CLOUDFLARE_ACCOUNT_ID
 * - ASSETS_DIRECTORY
 *
 * In your assets directory, place files like html or images.
 *
 * After deployment, your assets will be available at:
 *   <worker-route>/<filename>  (e.g. example.com/cat.jpg)
 */

import crypto from 'crypto';
import fs from 'fs';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import path from 'path';
import { exit } from 'node:process';

import Cloudflare from 'cloudflare';
import { toFile } from 'cloudflare/index';
import { UploadCreateParams } from 'cloudflare/resources/workers/scripts/assets';

const apiToken = process.env['CLOUDFLARE_API_TOKEN'] ?? '';
if (!apiToken) {
  throw new Error('Please set envar CLOUDFLARE_ACCOUNT_ID');
}

const accountID = process.env['CLOUDFLARE_ACCOUNT_ID'] ?? '';
if (!accountID) {
  throw new Error('Please set envar CLOUDFLARE_API_TOKEN');
}

const assetsDirectory = process.env['ASSETS_DIRECTORY'] ?? '';
if (!assetsDirectory) {
  throw new Error('Please set envar ASSETS_DIRECTORY');
}

const client = new Cloudflare({
  apiToken: apiToken,
});

/**
 * Recursively reads all files from a directory and creates a manifest
 * mapping file paths to their SHA-256 hash and size.
 *
 * Output format:
 * {
 *   "/index.html": { hash: "abc123...", size: 123 },
 *   "/images/cat.jpg": { hash: "def456...", size: 4567 }
 * }
 */
function createManifest(directory: string): Record<string, UploadCreateParams.Manifest> {
  const manifest: Record<string, UploadCreateParams.Manifest> = {};
  (function processDirectory(directory: string, basePath = '') {
    fs.readdirSync(directory, { withFileTypes: true }).forEach((dirent) => {
      const fullPath = path.join(directory, dirent.name);
      const relativePath = path.join(basePath, dirent.name);

      if (dirent.isDirectory()) {
        processDirectory(fullPath, relativePath);
      } else {
        const fileContent = fs.readFileSync(fullPath);
        const extension = extname(relativePath).substring(1);

        // Generate SHA-256 hash and encode in Base64
        const hash = crypto
          .createHash('sha256')
          .update(fileContent.toString('base64') + extension)
          .digest('hex')
          .toString()
          .slice(0, 32);

        // Use forward slashes for paths in manifest
        const manifestPath = `/${relativePath.replace(/\\/g, '/')}`;
        manifest[manifestPath] = {
          hash: hash,
          size: fileContent.length,
        };
      }
    });
  })(directory);
  return manifest;
}

async function main() {
  /*
   * For simplicity in this example, we'll just create the workers script
   * content directly instead of reading it from the Assets Directory which
   * would be more typical for a full Workers and Frameworks build output
   * using a command like `wrangler deploy --dry-run -outdir build`.
   */
  const scriptName = 'my-script-with-assets';
  const scriptFileName = `${scriptName}.mjs`;
  const scriptContent = `
    export default {
      async fetch(request, env, ctx) {
        return env.ASSETS.fetch(request);
      }
    };
  `;

  const manifest = createManifest(assetsDirectory);

  try {
    // Upload the manifest and get back which new or changed files need to be uploaded
    // The files that need to be uploaded are indicated by hash and batched into buckets
    const response = await client.workers.scripts.assets.upload.create(scriptName, {
      account_id: accountID,
      manifest: manifest,
    });
    const { buckets } = response;
    if (!response.jwt || !buckets) {
      throw new Error('There was a problem starting the Assets Upload Session');
    }

    if (buckets.length === 0) {
      console.log('Nothing to upload!');
      exit(0);
    }

    // The auth token to use for uploading via the assets upload API
    const uploadJwt: string = response.jwt;

    /*
     * For the new or changed files that need to be uploaded...
     * - Look at the file hashes per bucket and foreach...
     * - Get the filepath back from the hash (reverse lookup in the manifest)
     * - Read the file contents from disk and encode them to base64
     * - Add that to the payload for upload (1 bucket = 1 payload = 1..N base64 encoded files)
     */
    const newPayloads: Record<string, any>[] = [];
    for (const bucket of buckets) {
      const newPayload: Record<string, any> = {};
      for (const hash of bucket) {
        const relativeAssetPath = Object.entries(manifest).find((record) => record[1].hash == hash)?.[0];
        if (!relativeAssetPath) {
          return;
        }
        const assetFileContents = (await readFile(path.join(assetsDirectory, relativeAssetPath))).toString(
          'base64',
        );
        newPayload[hash] = assetFileContents;
      }
      newPayloads.push(newPayload);
    }

    let completionJwt: string | undefined;

    // Upload each bucket/payload (this could be parallelized)
    for (const payload of newPayloads) {
      const bucketUploadReponse = await client.workers.assets.upload.create(
        {
          account_id: accountID,
          base64: true,
          body: payload,
        },
        {
          // This API uses `Bearer: <assets_jwt>` instead of `Bearer: <api_token>`
          headers: { Authorization: `Bearer ${uploadJwt}` },
        },
      );

      // For each bucket of uploads, we might or might not get a new jwt to use that indicates
      // it got all expected files
      // See: https://developers.cloudflare.com/workers/static-assets/direct-upload
      if (bucketUploadReponse?.jwt) {
        completionJwt = bucketUploadReponse.jwt;
      }
    }

    if (!completionJwt) {
      console.error('Did not get completion JWT');
      exit(1);
    }

    // Finally, upload the Worker defining Assets in the config and using the Completion JWT
    // https://developers.cloudflare.com/api/resources/workers/subresources/scripts/methods/update/
    const script = await client.workers.scripts.update(scriptName, {
      account_id: accountID,
      // https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/
      metadata: {
        main_module: scriptFileName,
        assets: {
          config: {
            not_found_handling: 'single-page-application',
          },
          jwt: completionJwt,
        },
      },
      files: {
        // Add main_module file. Again, you'd probably actually read this file
        // from your Worker build output / assets directory.
        [scriptFileName]: await toFile(Buffer.from(scriptContent), scriptFileName, {
          type: 'application/javascript+module',
        }),
      },
    });
    console.log('Script and Assets uploaded successfully!');
    console.log(JSON.stringify(script, null, 2));
  } catch (error) {
    console.error(error);
  }
}

main();
