#!/usr/bin/env -S npm run tsn -T

import Cloudflare from 'cloudflare';

// gets API Key from environment variable CLOUDFLARE_API_KEY & CLOUDFLARE_EMAIL
const client = new Cloudflare();

async function main() {
  const accountId = process.env['CLOUDFLARE_ACCOUNT_ID'];
  if (!accountId) {
    console.error('CLOUDFLARE_ACCOUNT_ID is required. Set it in your environment and re-run.');
    process.exit(1);
  }

  const response = await client.ai.run('@cf/meta/llama-2-7b-chat-int8', {
    account_id: accountId,
    prompt: 'Tell me about Workers AI',
  });
  console.log(response);
}

main();
