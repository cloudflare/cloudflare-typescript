#!/usr/bin/env -S npm run tsn -T

/**
 * Create a Worker that serves static assets
 *
 * This example demonstrates how to:
 * - Upload static assets to Cloudflare Workers
 * - Create and deploy a Worker that serves those assets
 *
 * Docs:
 * - https://developers.cloudflare.com/workers/static-assets/direct-upload
 *
 * Prerequisites:
 * 1. Generate an API token: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/
 * 2. Find your account ID: https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/
 * 3. Find your workers.dev subdomain: https://developers.cloudflare.com/workers/configuration/routing/workers-dev/
 *
 * Environment variables:
 *   - CLOUDFLARE_API_TOKEN (required)
 *   - CLOUDFLARE_ACCOUNT_ID (required)
 *   - ASSETS_DIRECTORY (required)
 *   - CLOUDFLARE_SUBDOMAIN (optional)
 *
 * Usage:
 *   Place your static files in the ASSETS_DIRECTORY, then run this script.
 *   Assets will be available at: my-script-with-assets.$subdomain.workers.dev/$filename
 */

import crypto from 'crypto';
import fs from 'fs';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import path from 'path';
import { exit } from 'node:process';

import Cloudflare from 'cloudflare';

interface Config {
  apiToken: string;
  accountId: string;
  assetsDirectory: string;
  subdomain: string | undefined;
  workerName: string;
}

interface AssetManifest {
  [path: string]: {
    hash: string;
    size: number;
  };
}

interface UploadPayload {
  [hash: string]: string; // base64 encoded content
}

const WORKER_NAME = 'my-worker-with-assets';
const SCRIPT_FILENAME = `${WORKER_NAME}.mjs`;

function loadConfig(): Config {
  const apiToken = process.env['CLOUDFLARE_API_TOKEN'];
  if (!apiToken) {
    throw new Error('Missing required environment variable: CLOUDFLARE_API_TOKEN');
  }

  const accountId = process.env['CLOUDFLARE_ACCOUNT_ID'];
  if (!accountId) {
    throw new Error('Missing required environment variable: CLOUDFLARE_ACCOUNT_ID');
  }

  const assetsDirectory = process.env['ASSETS_DIRECTORY'];
  if (!assetsDirectory) {
    throw new Error('Missing required environment variable: ASSETS_DIRECTORY');
  }

  if (!fs.existsSync(assetsDirectory)) {
    throw new Error(`Assets directory does not exist: ${assetsDirectory}`);
  }

  const subdomain = process.env['CLOUDFLARE_SUBDOMAIN'];

  return {
    apiToken,
    accountId,
    assetsDirectory,
    subdomain: subdomain || undefined,
    workerName: WORKER_NAME,
  };
}

const config = loadConfig();
const client = new Cloudflare({
  apiToken: config.apiToken,
});

/**
 * Recursively reads all files from a directory and creates a manifest
 * mapping file paths to their hash and size.
 */
function createManifest(directory: string): AssetManifest {
  const manifest: AssetManifest = {};

  function processDirectory(currentDir: string, basePath = ''): void {
    try {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        const relativePath = path.join(basePath, entry.name);

        if (entry.isDirectory()) {
          processDirectory(fullPath, relativePath);
        } else if (entry.isFile()) {
          try {
            const fileContent = fs.readFileSync(fullPath);
            const extension = extname(relativePath).substring(1);

            // Generate a hash for the file
            const hash = crypto
              .createHash('sha256')
              .update(fileContent.toString('base64') + extension)
              .digest('hex')
              .slice(0, 32);

            // Normalize path separators to forward slashes
            const manifestPath = `/${relativePath.replace(/\\/g, '/')}`;

            manifest[manifestPath] = {
              hash,
              size: fileContent.length,
            };

            console.log(`Added to manifest: ${manifestPath} (${fileContent.length} bytes)`);
          } catch (error) {
            console.warn(`Failed to process file ${fullPath}:`, error);
          }
        }
      }
    } catch (error) {
      throw new Error(`Failed to read directory ${currentDir}: ${error}`);
    }
  }

  processDirectory(directory);

  if (Object.keys(manifest).length === 0) {
    throw new Error(`No files found in assets directory: ${directory}`);
  }

  console.log(`Created manifest with ${Object.keys(manifest).length} files`);
  return manifest;
}

/**
 * Generates the Worker script content that serves static assets
 */
function generateWorkerScript(exampleFile: string): string {
  return `
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Serve a simple index page at the root
    if (url.pathname === '/') {
      return new Response(
        \`<!DOCTYPE html>
<html>
<head>
  <title>Static Assets Worker</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
    h1 { color: #f38020; }
    .asset-info { background: #f5f5f5; padding: 15px; border-radius: 5px; }
  </style>
</head>
<body>
  <h1>This Worker serves static assets!</h1>
  <div class="asset-info">
    <p><strong>To access your assets,</strong> add <code>/filename</code> to the URL.</p>
    <p>Try visiting <a href="\${url.origin}/${exampleFile}">/${exampleFile}</a></p>
  </div>
</body>
</html>\`,
        {
          status: 200,
          headers: { 'Content-Type': 'text/html' }
        }
      );
    }
    
    // Serve static assets for all other paths
    return env.ASSETS.fetch(request);
  }
};
  `.trim();
}

/**
 * Creates upload payloads from buckets and manifest
 */
async function createUploadPayloads(
  buckets: string[][],
  manifest: AssetManifest,
  assetsDirectory: string,
): Promise<UploadPayload[]> {
  const payloads: UploadPayload[] = [];

  for (const bucket of buckets) {
    const payload: UploadPayload = {};

    for (const hash of bucket) {
      // Find the file path for this hash
      const manifestEntry = Object.entries(manifest).find(([_, data]) => data.hash === hash);

      if (!manifestEntry) {
        throw new Error(`Could not find file for hash: ${hash}`);
      }

      const [relativePath] = manifestEntry;
      const fullPath = path.join(assetsDirectory, relativePath);

      try {
        const fileContent = await readFile(fullPath);
        payload[hash] = fileContent.toString('base64');
        console.log(`Prepared for upload: ${relativePath}`);
      } catch (error) {
        throw new Error(`Failed to read file ${fullPath}: ${error}`);
      }
    }

    payloads.push(payload);
  }

  return payloads;
}

/**
 * Uploads asset payloads
 */
async function uploadAssets(
  payloads: UploadPayload[],
  uploadJwt: string,
  accountId: string,
): Promise<string> {
  let completionJwt: string | undefined;

  console.log(`Uploading ${payloads.length} payload(s)...`);

  for (let i = 0; i < payloads.length; i++) {
    const payload = payloads[i]!;
    console.log(`Uploading payload ${i + 1}/${payloads.length}...`);

    try {
      const response = await client.workers.assets.upload.create(
        {
          account_id: accountId,
          base64: true,
          body: payload,
        },
        {
          headers: { Authorization: `Bearer ${uploadJwt}` },
        },
      );

      if (response?.jwt) {
        completionJwt = response.jwt;
      }
    } catch (error) {
      throw new Error(`Failed to upload payload ${i + 1}: ${error}`);
    }
  }

  if (!completionJwt) {
    throw new Error('Upload completed but no completion JWT received');
  }

  console.log('✅ All assets uploaded successfully');
  return completionJwt;
}

async function main(): Promise<void> {
  try {
    console.log('🚀 Starting Worker creation and deployment with static assets...');
    console.log(`📁 Assets directory: ${config.assetsDirectory}`);

    console.log('📝 Creating asset manifest...');
    const manifest = createManifest(config.assetsDirectory);
    const exampleFile = Object.keys(manifest)[0]?.replace(/^\//, '') || 'file.txt';

    const scriptContent = generateWorkerScript(exampleFile);

    let worker;
    try {
      worker = await client.workers.beta.workers.get(config.workerName, {
        account_id: config.accountId,
      });
      console.log(`♻️  Worker ${config.workerName} already exists. Using it.`);
    } catch (error) {
      if (!(error instanceof Cloudflare.NotFoundError)) {
        throw error;
      }
      console.log(`✏️  Creating Worker ${config.workerName}...`);
      worker = await client.workers.beta.workers.create({
        account_id: config.accountId,
        name: config.workerName,
        subdomain: {
          enabled: config.subdomain !== undefined,
        },
        observability: {
          enabled: true,
        },
      });
    }

    console.log(`⚙️  Worker id: ${worker.id}`);
    console.log('🔄 Starting asset upload session...');

    const uploadResponse = await client.workers.scripts.assets.upload.create(config.workerName, {
      account_id: config.accountId,
      manifest,
    });

    const { buckets, jwt: uploadJwt } = uploadResponse;

    if (!uploadJwt || !buckets) {
      throw new Error('Failed to start asset upload session');
    }

    let completionJwt: string;

    if (buckets.length === 0) {
      console.log('✅ No new assets to upload!');
      // Use the initial upload JWT as completion JWT when no uploads are needed
      completionJwt = uploadJwt;
    } else {
      const payloads = await createUploadPayloads(buckets, manifest, config.assetsDirectory);

      completionJwt = await uploadAssets(payloads, uploadJwt, config.accountId);
    }

    console.log('✏️  Creating Worker version...');

    // Create a new version with assets
    const version = await client.workers.beta.workers.versions.create(worker.id, {
      account_id: config.accountId,
      main_module: SCRIPT_FILENAME,
      compatibility_date: new Date().toISOString().split('T')[0]!,
      bindings: [
        {
          type: 'assets',
          name: 'ASSETS',
        },
      ],
      assets: {
        jwt: completionJwt,
      },
      modules: [
        {
          name: SCRIPT_FILENAME,
          content_type: 'application/javascript+module',
          content_base64: Buffer.from(scriptContent).toString('base64'),
        },
      ],
    });

    console.log('🚚 Creating Worker deployment...');

    // Create a deployment and point all traffic to the version we created
    await client.workers.scripts.deployments.create(config.workerName, {
      account_id: config.accountId,
      strategy: 'percentage',
      versions: [
        {
          percentage: 100,
          version_id: version.id,
        },
      ],
    });

    console.log('✅ Deployment successful!');

    if (config.subdomain) {
      console.log(`
🌍 Your Worker is live!
📍 Base URL: https://${config.workerName}.${config.subdomain}.workers.dev/
📄 Try accessing: https://${config.workerName}.${config.subdomain}.workers.dev/${exampleFile}
`);
    } else {
      console.log(`
⚠️  Set up a route, custom domain, or workers.dev subdomain to access your Worker.
Add CLOUDFLARE_SUBDOMAIN to your environment variables to set one up automatically.
`);
    }
  } catch (error) {
    console.error('❌ Deployment failed:', error);
    exit(1);
  }
}

main();
