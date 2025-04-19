#!/usr/bin/env -S npm run tsn -T

/*
 * Generate an API token: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/
 * (Not Global API Key!)
 *
 * Find your account id: https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/
 *
 * Set these environment variables:
 * - CLOUDFLARE_API_TOKEN
 * - CLOUDFLARE_ACCOUNT_ID
 *
 * ### Workers for Platforms ###
 *
 * For uploading a User Worker to a dispatch namespace:
 * https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/
 *
 * Define a "dispatchNamespaceName" variable and change the entire "const script = " line to the following:
 * "const script = await client.workersForPlatforms.dispatch.namespaces.scripts.update(dispatchNamespaceName, scriptName, {"
 */

import Cloudflare from 'cloudflare';
import { toFile } from 'cloudflare/index';

const apiToken = process.env['CLOUDFLARE_API_TOKEN'] ?? '';
if (!apiToken) {
  throw new Error('Please set envar CLOUDFLARE_ACCOUNT_ID');
}

const accountID = process.env['CLOUDFLARE_ACCOUNT_ID'] ?? '';
if (!accountID) {
  throw new Error('Please set envar CLOUDFLARE_API_TOKEN');
}

const client = new Cloudflare({
  apiToken: apiToken,
});

async function main() {
  const scriptName = 'my-hello-world-script';
  const scriptFileName = `${scriptName}.mjs`;

  // Workers Scripts prefer Module Syntax
  // https://blog.cloudflare.com/workers-javascript-modules/
  const scriptContent = `
    export default {
      async fetch(request, env, ctx) {
        return new Response(env.MESSAGE, { status: 200 });
      }
    };
  `;

  try {
    // https://developers.cloudflare.com/api/resources/workers/subresources/scripts/methods/update/
    const script = await client.workers.scripts.update(scriptName, {
      account_id: accountID,
      // https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/
      metadata: {
        main_module: scriptFileName,
        bindings: [
          {
            type: 'plain_text',
            name: 'MESSAGE',
            text: 'Hello World!',
          },
        ],
      },
      files: {
        // Add main_module file
        [scriptFileName]: await toFile(Buffer.from(scriptContent), scriptFileName, {
          type: 'application/javascript+module',
        }),
        // Can add other files, such as more modules or source maps
        // [sourceMapFileName]: await toFile(Buffer.from(sourceMapContent), sourceMapFileName, {
        //   type: 'application/source-map',
        // }),
      },
    });
    console.log('Script Upload success!');
    console.log(JSON.stringify(script, null, 2));
  } catch (error) {
    console.error('Script Upload failure!');
    console.error(error);
  }
}

main();
