#!/usr/bin/env -S npm run tsn -T

import Cloudflare from 'cloudflare';

/*
 * Set these environment variables:
 * - CLOUDFLARE_EMAIL
 * - CLOUDFLARE_API_KEY
 * - CLOUDFLARE_ACCOUNT_ID
 */
const client = new Cloudflare();
const accountID = process.env['CLOUDFLARE_ACCOUNT_ID'] ?? '';

async function main() {
  const scriptName = 'my-hello-world-script';
  const scriptFileName = `${scriptName}.mjs`;
  const scriptContent = `
    export default {
      async fetch(request, env, ctx) {
        return new Response("Hello World!", { status: 200 });
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
            bindings: [],
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
