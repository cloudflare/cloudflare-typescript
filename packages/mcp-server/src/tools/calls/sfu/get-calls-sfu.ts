// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'calls.sfu',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_calls_sfu',
  description: 'Fetches details for a single Calls app.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      app_id: {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a item.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { app_id, ...body } = args;
  return client.calls.sfu.get(app_id, body);
};

export default { metadata, tool, handler };
