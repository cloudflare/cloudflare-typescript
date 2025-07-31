// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/d1/database/{database_id}',
  operationId: 'cloudflare-d1-delete-database',
};

export const tool: Tool = {
  name: 'delete_d1_database',
  description: 'Deletes the specified D1 database.',
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
    required: ['account_id', 'database_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { database_id, ...body } = args as any;
  return asTextContentResult((await client.d1.database.delete(database_id, body)) as object);
};

export default { metadata, tool, handler };
