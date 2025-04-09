// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'calls.turn',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_calls_turn',
  description: 'Creates a new Cloudflare Calls TURN key.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      name: {
        type: 'string',
        description: 'A short description of a TURN key, not shown to end users.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.calls.turn.create(body);
};

export default { metadata, tool, handler };
