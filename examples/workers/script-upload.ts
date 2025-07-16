#!/usr/bin/env -S npm run tsn -T

/**
 * Create a Worker with a Version and Deployment
 * 
 * Docs
 * - https://developers.cloudflare.com/workers/configuration/versions-and-deployments/
 * - https://developers.cloudflare.com/workers/platform/infrastructure-as-code/
 * 
 * Generate an API token:
 *   https://developers.cloudflare.com/fundamentals/api/get-started/create-token/
 *   (Not Global API Key!)
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
 */

import Cloudflare from 'cloudflare';

const apiToken = process.env['CLOUDFLARE_API_TOKEN'] ?? '';
if (!apiToken) {
  throw new Error('Please set envar CLOUDFLARE_API_TOKEN');
}

const accountID = process.env['CLOUDFLARE_ACCOUNT_ID'] ?? '';
if (!accountID) {
  throw new Error('Please set envar CLOUDFLARE_ACCOUNT_ID');
}

const subdomain = process.env['CLOUDFLARE_SUBDOMAIN'] ?? '';

const client = new Cloudflare({
  apiToken,
});

async function main() {
  const workerName = 'my-hello-world-worker';
  const scriptFileName = `${workerName}.mjs`;

  // Workers Scripts use ES Module Syntax
  // https://blog.cloudflare.com/workers-javascript-modules/
  const scriptContent = `
    export default {
      async fetch(request, env, ctx) {
        return new Response(env.MESSAGE, { status: 200 });
      }
    };
  `;

  /**
   * Create a Worker and set non-versioned settings like observability
   */
  const worker = await client.workers.create(workerName, {
    account_id: accountID,
    subdomain: {
      enabled: subdomain ? true : false,
    },
    observability: {
      enabled: true,
    },
  });

  /**
   * Create the first version of the Worker
   * This is where code and bindings are defined and can be different between versions
   */
  const version = await client.workers.versions.create(worker.id, {
    account_id: accountID,
    main_module: scriptFileName,
    compatibility_date: new Date().toISOString().split('T')[0],
    bindings: [
      {
        type: 'plain_text',
        name: 'MESSAGE',
        text: 'Hello World!',
      },
    ],
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
   * Triggers that hit fetch() in the Worker (ie. HTTP requests from workers.dev, routes, and custom domains)
   * split requests between one or multiple versions by deployments
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
    console.log(`${workerName} is live at: ${workerName}.${subdomain}.workers.dev`);
  }
  else {
    console.log('Setup a route, custom domain, or workers.dev subdomain to see this Worker live.');
  }
}

main();
