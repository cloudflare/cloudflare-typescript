// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'brand_protection',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'submit_brand_protection',
  description: 'Submit suspicious URL for scanning',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      url: {
        type: 'string',
        description: 'URL(s) to filter submissions results by',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.brandProtection.submit(body);
};

export default { metadata, tool, handler };
