// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_addressing_prefixes',
  description: 'List a particular prefix owned by the account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      prefix_id: {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { prefix_id, ...body } = args;
  return client.addressing.prefixes.get(prefix_id, body);
};

export default { metadata, tool, handler };
