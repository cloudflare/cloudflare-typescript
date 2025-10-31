// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/d1/database/{database_id}/query',
  operationId: 'cloudflare-d1-query-database',
};

export const tool: Tool = {
  name: 'query_d1_database',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the query result as an object.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/query_result'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    query_result: {\n      type: 'object',\n      properties: {\n        meta: {\n          type: 'object',\n          properties: {\n            changed_db: {\n              type: 'boolean',\n              description: 'Denotes if the database has been altered in some way, like deleting rows.'\n            },\n            changes: {\n              type: 'number',\n              description: 'Rough indication of how many rows were modified by the query, as provided by SQLite\\'s `sqlite3_total_changes()`.'\n            },\n            duration: {\n              type: 'number',\n              description: 'The duration of the SQL query execution inside the database. Does not include any network communication.'\n            },\n            last_row_id: {\n              type: 'number',\n              description: 'The row ID of the last inserted row in a table with an `INTEGER PRIMARY KEY` as provided by SQLite. Tables created with `WITHOUT ROWID` do not populate this.'\n            },\n            rows_read: {\n              type: 'number',\n              description: 'Number of rows read during the SQL query execution, including indices (not all rows are necessarily returned).'\n            },\n            rows_written: {\n              type: 'number',\n              description: 'Number of rows written during the SQL query execution, including indices.'\n            },\n            served_by_primary: {\n              type: 'boolean',\n              description: 'Denotes if the query has been handled by the database primary instance.'\n            },\n            served_by_region: {\n              type: 'string',\n              description: 'Region location hint of the database instance that handled the query.',\n              enum: [                'WNAM',\n                'ENAM',\n                'WEUR',\n                'EEUR',\n                'APAC',\n                'OC'\n              ]\n            },\n            size_after: {\n              type: 'number',\n              description: 'Size of the database after the query committed, in bytes.'\n            },\n            timings: {\n              type: 'object',\n              description: 'Various durations for the query.',\n              properties: {\n                sql_duration_ms: {\n                  type: 'number',\n                  description: 'The duration of the SQL query execution inside the database. Does not include any network communication.'\n                }\n              }\n            }\n          }\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'database_id', 'sql'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { database_id, jq_filter, ...body } = args as any;
  const response = await client.d1.database.query(database_id, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
