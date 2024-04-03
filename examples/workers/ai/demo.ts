#!/usr/bin/env -S npm run tsn -T

import Cloudflare from 'cloudflare';

// gets API Key from environment variable CLOUDFLARE_API_KEY & CLOUDFLARE_EMAIL
const client = new Cloudflare();

async function main() {
  const response = await client.workers.ai.run('@cf/meta/llama-2-7b-chat-int8', {
    account_id: process.env['CLOUDFLARE_ACCOUNT_ID']!,
    prompt: 'Tell me about Workers AI',
  });
  console.log(response);
}

main();
