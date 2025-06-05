// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/d1/database/{database_id}',
  operationId: 'cloudflare-d1-update-database',
};

export const tool: Tool = {
  name: 'update_d1_database',
  description: 'Updates the specified D1 database.',
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
      read_replication: {
        type: 'object',
        description: 'Configuration for D1 read replication.',
        properties: {
          mode: {
            type: 'string',
            description:
              "The read replication mode for the database. Use 'auto' to create replicas and allow D1 automatically place them around the world, or 'disabled' to not use any database replicas (it can take a few hours for all replicas to be deleted).",
            enum: ['auto', 'disabled'],
          },
        },
        required: ['mode'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { database_id, ...body } = args as any;
  return asTextContentResult(await client.d1.database.update(database_id, body));
};

export default { metadata, tool, handler };
