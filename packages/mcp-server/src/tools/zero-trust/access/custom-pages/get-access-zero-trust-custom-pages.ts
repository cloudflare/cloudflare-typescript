// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.custom_pages',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_access_zero_trust_custom_pages',
  description: 'Fetches a custom page and also returns its HTML.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      custom_page_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { custom_page_id, ...body } = args;
  return client.zeroTrust.access.customPages.get(custom_page_id, body);
};

export default { metadata, tool, handler };
