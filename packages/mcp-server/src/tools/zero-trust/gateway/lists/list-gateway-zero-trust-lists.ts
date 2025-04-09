// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.lists',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_gateway_zero_trust_lists',
  description: 'Fetches all Zero Trust lists for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        description: 'The type of list.',
        enum: ['SERIAL', 'URL', 'DOMAIN', 'EMAIL', 'IP'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.gateway.lists.list(body);
};

export default { metadata, tool, handler };
