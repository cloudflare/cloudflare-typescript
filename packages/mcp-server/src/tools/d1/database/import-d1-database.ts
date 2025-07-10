// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/d1/database/{database_id}/import',
  operationId: 'cloudflare-d1-import-database',
};

export const tool: Tool = {
  name: 'import_d1_database',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerates a temporary URL for uploading an SQL file to, then instructing the D1 to import it\nand polling it for status updates. Imports block the D1 for their duration.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        at_bookmark: {\n          type: 'string',\n          description: 'The current time-travel bookmark for your D1, used to poll for updates. Will not change for the duration of the import. Only returned if an import process is currently running or recently finished.'\n        },\n        error: {\n          type: 'string',\n          description: 'Only present when status = \\'error\\'. Contains the error message that prevented the import from succeeding.'\n        },\n        filename: {\n          type: 'string',\n          description: 'Derived from the database ID and etag, to use in avoiding repeated uploads. Only returned when for the \\'init\\' action.'\n        },\n        messages: {\n          type: 'array',\n          description: 'Logs since the last time you polled',\n          items: {\n            type: 'string'\n          }\n        },\n        result: {\n          type: 'object',\n          description: 'Only present when status = \\'complete\\'',\n          properties: {\n            final_bookmark: {\n              type: 'string',\n              description: 'The time-travel bookmark if you need restore your D1 to directly after the import succeeded.'\n            },\n            meta: {\n              type: 'object',\n              properties: {\n                changed_db: {\n                  type: 'boolean',\n                  description: 'Denotes if the database has been altered in some way, like deleting rows.'\n                },\n                changes: {\n                  type: 'number',\n                  description: 'Rough indication of how many rows were modified by the query, as provided by SQLite\\'s `sqlite3_total_changes()`.'\n                },\n                duration: {\n                  type: 'number',\n                  description: 'The duration of the SQL query execution inside the database. Does not include any network communication.'\n                },\n                last_row_id: {\n                  type: 'number',\n                  description: 'The row ID of the last inserted row in a table with an `INTEGER PRIMARY KEY` as provided by SQLite. Tables created with `WITHOUT ROWID` do not populate this.'\n                },\n                rows_read: {\n                  type: 'number',\n                  description: 'Number of rows read during the SQL query execution, including indices (not all rows are necessarily returned).'\n                },\n                rows_written: {\n                  type: 'number',\n                  description: 'Number of rows written during the SQL query execution, including indices.'\n                },\n                served_by_primary: {\n                  type: 'boolean',\n                  description: 'Denotes if the query has been handled by the database primary instance.'\n                },\n                served_by_region: {\n                  type: 'string',\n                  description: 'Region location hint of the database instance that handled the query.',\n                  enum: [                    'WNAM',\n                    'ENAM',\n                    'WEUR',\n                    'EEUR',\n                    'APAC',\n                    'OC'\n                  ]\n                },\n                size_after: {\n                  type: 'number',\n                  description: 'Size of the database after the query committed, in bytes.'\n                },\n                timings: {\n                  type: 'object',\n                  description: 'Various durations for the query.',\n                  properties: {\n                    sql_duration_ms: {\n                      type: 'number',\n                      description: 'The duration of the SQL query execution inside the database. Does not include any network communication.'\n                    }\n                  },\n                  required: []\n                }\n              },\n              required: []\n            },\n            num_queries: {\n              type: 'number',\n              description: 'The total number of queries that were executed during the import.'\n            }\n          },\n          required: []\n        },\n        status: {\n          type: 'string',\n          enum: [            'complete',\n            'error'\n          ]\n        },\n        success: {\n          type: 'boolean'\n        },\n        type: {\n          type: 'string',\n          enum: [            'import'\n          ]\n        },\n        upload_url: {\n          type: 'string',\n          description: 'The R2 presigned URL to use for uploading. Only returned when for the \\'init\\' action.'\n        }\n      },\n      required: []\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
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
          action: {
            type: 'string',
            description: 'Indicates you have a new SQL file to upload.',
            enum: ['init'],
          },
          etag: {
            type: 'string',
            description:
              "Required when action is 'init' or 'ingest'. An md5 hash of the file you're uploading. Used to check if it already exists, and validate its contents before ingesting.",
          },
        },
      },
      {
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
          action: {
            type: 'string',
            description: "Indicates you've finished uploading to tell the D1 to start consuming it",
            enum: ['ingest'],
          },
          etag: {
            type: 'string',
            description:
              "An md5 hash of the file you're uploading. Used to check if it already exists, and validate its contents before ingesting.",
          },
          filename: {
            type: 'string',
            description: 'The filename you have successfully uploaded.',
          },
        },
      },
      {
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
          action: {
            type: 'string',
            description: "Indicates you've finished uploading to tell the D1 to start consuming it",
            enum: ['poll'],
          },
          current_bookmark: {
            type: 'string',
            description: 'This identifies the currently-running import, checking its status.',
          },
        },
      },
    ],
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.d1.database.import(database_id, body)));
};

export default { metadata, tool, handler };
