// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'calls.sfu',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_calls_sfu',
  description: 'Deletes an app from Cloudflare Calls',
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
  return client.calls.sfu.delete(app_id, body);
};

export default { metadata, tool, handler };
