// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'query_d1_database',
  description: 'Returns the query result as an object.',
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
      sql: {
        type: 'string',
        description:
          'Your SQL query. Supports multiple statements, joined by semicolons, which will be executed as a batch.',
      },
      params: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { database_id, ...body } = args;
  return client.d1.database.query(database_id, body);
};

export default { metadata, tool, handler };
