#!/usr/bin/env -S npm run tsn -T

/**
 * Create and deploy a Worker
 *
 * Docs:
 * - https://developers.cloudflare.com/workers/configuration/versions-and-deployments/
 * - https://developers.cloudflare.com/workers/platform/infrastructure-as-code/
 *
 * Prerequisites:
 * 1. Generate an API token: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/
 * 2. Find your account ID: https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/
 * 3. Find your workers.dev subdomain: https://developers.cloudflare.com/workers/configuration/routing/workers-dev/
 *
 * Environment variables:
 *   - CLOUDFLARE_API_TOKEN (required)
 *   - CLOUDFLARE_ACCOUNT_ID (required)
 *   - CLOUDFLARE_SUBDOMAIN (optional)
 *
 * Usage:
 *   Run this script to deploy a simple "Hello World" Worker.
 *   Access it at: my-hello-world-worker.$subdomain.workers.dev
 */

import { exit } from 'node:process';

import Cloudflare from 'cloudflare';

interface Config {
  apiToken: string;
  accountId: string;
  subdomain: string | undefined;
  workerName: string;
}

const WORKER_NAME = 'my-hello-world-worker';
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

  const subdomain = process.env['CLOUDFLARE_SUBDOMAIN'];

  return {
    apiToken,
    accountId,
    subdomain: subdomain || undefined,
    workerName: WORKER_NAME,
  };
}

const config = loadConfig();
const client = new Cloudflare({
  apiToken: config.apiToken,
});

async function main(): Promise<void> {
  try {
    console.log('🚀 Starting Worker creation and deployment...');

    const scriptContent = `
      export default {
        async fetch(request, env, ctx) {
          return new Response(env.MESSAGE, { status: 200 });
        },
      }`.trim();

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
    console.log('✏️  Creating Worker version...');

    // Create the first version of the Worker
    const version = await client.workers.beta.workers.versions.create(worker.id, {
      account_id: config.accountId,
      main_module: SCRIPT_FILENAME,
      compatibility_date: new Date().toISOString().split('T')[0]!,
      bindings: [
        {
          type: 'plain_text',
          name: 'MESSAGE',
          text: 'Hello World!',
        },
      ],
      modules: [
        {
          name: SCRIPT_FILENAME,
          content_type: 'application/javascript+module',
          content_base64: Buffer.from(scriptContent).toString('base64'),
        },
      ],
    });

    console.log(`⚙️  Version id: ${version.id}`);
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
📍 URL: https://${config.workerName}.${config.subdomain}.workers.dev/
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
