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
  name: 'edit_d1_database',
  description: 'Updates partially the specified D1 database.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { database_id, ...body } = args;
  return client.d1.database.edit(database_id, body);
};

export default { metadata, tool, handler };
