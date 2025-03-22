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
 */

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiToken: process.env['CLOUDFLARE_API_TOKEN'] ?? '',
});
const accountID = process.env['CLOUDFLARE_ACCOUNT_ID'] ?? '';

async function main() {
  const scriptName = 'my-hello-world-script';
  const scriptFileName = `${scriptName}.mjs`;
  const scriptContent = `
    export default {
      async fetch(request, env, ctx) {
        return new Response(env.MESSAGE, { status: 200 });
      }
    };
  `;

  const script: Cloudflare.Workers.Scripts.ScriptUpdateResponse = await client.workers.scripts.update(
    scriptName,
    {
      account_id: accountID,
      /*
       * Add script content keyed by the filename
       */
      // @ts-ignore
      [scriptFileName]: new File([scriptContent], scriptFileName, {
        type: 'application/javascript+module',
      }),
      // @ts-ignore
      metadata: new File(
        [
          JSON.stringify({
            // https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/
            bindings: [
              {
                type: 'plain_text',
                name: 'MESSAGE',
                text: 'Hello World!',
              },
            ],
            main_module: scriptFileName,
          }),
        ],
        'metadata.json',
        {
          type: 'application/json',
        },
      ),
    },
  );

  console.log(script.id);
}

main();
