// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.subscriptions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zones_subscriptions',
  description: 'Lists zone subscription details.',
  inputSchema: {
    type: 'object',
    properties: {
      identifier: {
        type: 'string',
        description: 'Subscription identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier } = args;
  return client.zones.subscriptions.get(identifier);
};

export default { metadata, tool, handler };
