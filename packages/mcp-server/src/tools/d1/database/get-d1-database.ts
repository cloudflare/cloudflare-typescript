// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_d1_database',
  description: 'Returns the specified D1 database.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      database_id: {
        type: 'string',
        description: 'D1 database identifier (UUID).',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { database_id, ...body } = args;
  return client.d1.database.get(database_id, body);
};

export default { metadata, tool, handler };
