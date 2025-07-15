// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the specified D1 database.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/d1'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    d1: {\n      type: 'object',\n      description: 'The details of the D1 database.',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'Specifies the timestamp the resource was created as an ISO8601 string.',\n          format: 'date-time'\n        },\n        file_size: {\n          type: 'number',\n          description: 'The D1 database\\'s size, in bytes.'\n        },\n        name: {\n          type: 'string',\n          description: 'D1 database name.'\n        },\n        num_tables: {\n          type: 'number'\n        },\n        read_replication: {\n          type: 'object',\n          description: 'Configuration for D1 read replication.',\n          properties: {\n            mode: {\n              type: 'string',\n              description: 'The read replication mode for the database. Use \\'auto\\' to create replicas and allow D1 automatically place them around the world, or \\'disabled\\' to not use any database replicas (it can take a few hours for all replicas to be deleted).',\n              enum: [                'auto',\n                'disabled'\n              ]\n            }\n          },\n          required: [            'mode'\n          ]\n        },\n        uuid: {\n          type: 'string',\n          description: 'D1 database identifier (UUID).'\n        },\n        version: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { database_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.d1.database.update(database_id, body)));
};

export default { metadata, tool, handler };
