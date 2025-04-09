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
  name: 'get_gateway_zero_trust_lists',
  description: 'Fetches a single Zero Trust list.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      list_id: {
        type: 'string',
        description: 'API Resource UUID tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { list_id, ...body } = args;
  return client.zeroTrust.gateway.lists.get(list_id, body);
};

export default { metadata, tool, handler };
