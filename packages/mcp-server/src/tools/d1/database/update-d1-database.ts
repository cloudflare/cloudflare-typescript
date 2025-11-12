// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the specified D1 database.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/d1',\n  $defs: {\n    d1: {\n      type: 'object',\n      description: 'The details of the D1 database.',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'Specifies the timestamp the resource was created as an ISO8601 string.',\n          format: 'date-time'\n        },\n        file_size: {\n          type: 'number',\n          description: 'The D1 database\\'s size, in bytes.'\n        },\n        name: {\n          type: 'string',\n          description: 'D1 database name.'\n        },\n        num_tables: {\n          type: 'number'\n        },\n        read_replication: {\n          type: 'object',\n          description: 'Configuration for D1 read replication.',\n          properties: {\n            mode: {\n              type: 'string',\n              description: 'The read replication mode for the database. Use \\'auto\\' to create replicas and allow D1 automatically place them around the world, or \\'disabled\\' to not use any database replicas (it can take a few hours for all replicas to be deleted).',\n              enum: [                'auto',\n                'disabled'\n              ]\n            }\n          },\n          required: [            'mode'\n          ]\n        },\n        uuid: {\n          type: 'string',\n          description: 'D1 database identifier (UUID).'\n        },\n        version: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'database_id', 'read_replication'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { database_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.d1.database.update(database_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
