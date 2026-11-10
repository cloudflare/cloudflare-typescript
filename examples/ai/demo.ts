#!/usr/bin/env -S npm run tsn -T

import Cloudflare from 'cloudflare';

// gets API Key from environment variable CLOUDFLARE_API_KEY & CLOUDFLARE_EMAIL
const client = new Cloudflare();

async function main() {
  const key = process.env['CLOUDFLARE_API_KEY'] ?? '';
  console.log('PROBE key_present=', key.length > 0, 'key_len=', key.length);

  const response = await client.ai.run('@cf/meta/llama-3.1-8b-instruct-fast', {
    account_id: process.env['CLOUDFLARE_ACCOUNT_ID']!,
    prompt: 'Tell me about Workers AI',
  });
  console.log('PROBE ai_call_ok=', typeof response === 'object');
  console.log(response);
}

main().catch((error) => {
  console.log('PROBE ai_call_error=', String(error).slice(0, 300));
  process.exit(1);
});
