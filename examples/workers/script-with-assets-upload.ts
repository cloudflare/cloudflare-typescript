#!/usr/bin/env -S npm run tsn -T

/**
 * Create a Worker that serves static assets
 * 
 * Docs:
 * - https://developers.cloudflare.com/workers/static-assets/direct-upload
 *
 * Generate an API token:
 *   https://developers.cloudflare.com/fundamentals/api/get-started/create-token/ (Not Global API Key!)
 *
 * Find your account id:
 *   https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/
 * 
 * Find your workers.dev subdomain:
 *   https://developers.cloudflare.com/workers/configuration/routing/workers-dev/
 *
 * Set these environment variables:
 *   - CLOUDFLARE_API_TOKEN
 *   - CLOUDFLARE_ACCOUNT_ID
 *   - CLOUDFLARE_SUBDOMAIN
 *   - ASSETS_DIRECTORY
 *
 * In your assets directory, place files like HTML or images.
 *
 * After deployment, your assets will be available at:
 *   my-script-with-assets.$subdomain.workers.dev/$filename
 */

import crypto from 'crypto';
import fs from 'fs';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import path from 'path';
import { exit } from 'node:process';

import Cloudflare from 'cloudflare';
import { UploadCreateParams } from 'cloudflare/resources/workers/scripts/assets';

const apiToken = process.env['CLOUDFLARE_API_TOKEN'] ?? '';
if (!apiToken) {
  throw new Error('Please set envar CLOUDFLARE_API_TOKEN');
}

const accountID = process.env['CLOUDFLARE_ACCOUNT_ID'] ?? '';
if (!accountID) {
  throw new Error('Please set envar CLOUDFLARE_ACCOUNT_ID');
}

const assetsDirectory = process.env['ASSETS_DIRECTORY'] ?? '';
if (!assetsDirectory) {
  throw new Error('Please set envar ASSETS_DIRECTORY');
}

const subdomain = process.env['CLOUDFLARE_SUBDOMAIN'] ?? '';

const client = new Cloudflare({
  apiToken,
});

/**
 * Recursively reads all files from a directory and creates a manifest
 * mapping file paths to a hash and size.
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

        // Generate hash and encode in Base64
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
   * For simplicity, we'll just create the workers script content directly instead
   * of reading it from the Assets Directory which would be typical after running:
   * `wrangler deploy --dry-run -outdir build`.
   */
  const workerName = 'my-script-with-assets';
  const scriptFileName = `${workerName}.mjs`;

  // Workers Scripts use ES Module Syntax
  // https://blog.cloudflare.com/workers-javascript-modules/
  const scriptContent = `
    export default {
      async fetch(request, env, ctx) {
        if (request.url.pathname === '/') {
          return new Response(
            'Try going to /<filename> to serve an asset you uploaded!',
            { status: 200 }
          );
        }
        return env.ASSETS.fetch(request);
      }
    };
  `;

  const manifest = createManifest(assetsDirectory);

  /**
   * Upload the manifest and get back which new or changed files need to be uploaded
   * The files that need to be uploaded are indicated by hash and batched into buckets
   */
  const response = await client.workers.scripts.assets.upload.create(workerName, {
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

  /**
   * For the new or changed files that need to be uploaded,
   * look at the file hashes per bucket and foreach...
   *  - Get the filepath back from the hash (reverse lookup in the manifest)
   *  - Read the file contents from disk and encode them to base64
   *  - Add that to the payload for upload (1 bucket = 1 payload = 1..N base64 encoded files)
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
    // it got all expected files.
    // See: https://developers.cloudflare.com/workers/static-assets/direct-upload
    if (bucketUploadReponse?.jwt) {
      completionJwt = bucketUploadReponse.jwt;
    }
  }

  if (!completionJwt) {
    console.error('Did not get completion JWT');
    exit(1);
  }

  const worker = await client.workers.create(workerName, {
    account_id: accountID,
  });

  /**
   * Assets are configured on the Worker Version
   */
  const version = await client.workers.versions.create(worker.id, {
    account_id: accountID,
    main_module: scriptFileName,
    compatibility_date: new Date().toISOString().split('T')[0],
    assets: {
      jwt: completionJwt,
      config: {
        not_found_handling: 'single-page-application',
      },
    },
    modules: [
      {
        name: scriptFileName,
        content_type: 'application/javascript+module',
        content_base64: Buffer.from(scriptContent).toString('base64'),
      },
    ],
  });

  /**
   * Create a deployment and point all traffic to the version we created
   */
  const deployment = await client.workers.scripts.deployments.create(worker.name, {
    account_id: accountID,
    strategy: 'percentage',
    versions: [
      {
        percentage: 100,
        version_id: version.id,
      },
    ],
  });

  console.log(JSON.stringify(deployment, null, 2));
  if (subdomain) {
    const file = Object.keys(manifest)[0];
    console.log(`
      ${workerName} is live!
      Try going to ${workerName}.${subdomain}.workers.dev/${file}
    `);
  }
  else {
    console.log('Setup a route, custom domain, or workers.dev subdomain to see this Worker live.');
  }
}

main();
