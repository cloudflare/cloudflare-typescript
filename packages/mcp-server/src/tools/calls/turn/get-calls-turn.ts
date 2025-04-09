// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'calls.turn',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_calls_turn',
  description: 'Fetches details for a single TURN key.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      key_id: {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a item.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { key_id, ...body } = args;
  return client.calls.turn.get(key_id, body);
};

export default { metadata, tool, handler };
