// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/d1/database/{database_id}/export',
  operationId: 'cloudflare-d1-export-database',
};

export const tool: Tool = {
  name: 'export_d1_database',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a URL where the SQL contents of your D1 can be downloaded. Note: this process may take\nsome time for larger DBs, during which your D1 will be unavailable to serve queries. To avoid\nblocking your DB unnecessarily, an in-progress export must be continually polled or will automatically cancel.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/database_export_response',\n  $defs: {\n    database_export_response: {\n      type: 'object',\n      properties: {\n        at_bookmark: {\n          type: 'string',\n          description: 'The current time-travel bookmark for your D1, used to poll for updates. Will not change for the duration of the export task.'\n        },\n        error: {\n          type: 'string',\n          description: 'Only present when status = \\'error\\'. Contains the error message.'\n        },\n        messages: {\n          type: 'array',\n          description: 'Logs since the last time you polled',\n          items: {\n            type: 'string'\n          }\n        },\n        result: {\n          type: 'object',\n          description: 'Only present when status = \\'complete\\'',\n          properties: {\n            filename: {\n              type: 'string',\n              description: 'The generated SQL filename.'\n            },\n            signed_url: {\n              type: 'string',\n              description: 'The URL to download the exported SQL. Available for one hour.'\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          enum: [            'complete',\n            'error'\n          ]\n        },\n        success: {\n          type: 'boolean'\n        },\n        type: {\n          type: 'string',\n          enum: [            'export'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
      output_format: {
        type: 'string',
        description: 'Specifies that you will poll this endpoint until the export completes',
        enum: ['polling'],
      },
      current_bookmark: {
        type: 'string',
        description:
          'To poll an in-progress export, provide the current bookmark (returned by your first polling response)',
      },
      dump_options: {
        type: 'object',
        properties: {
          no_data: {
            type: 'boolean',
            description: 'Export only the table definitions, not their contents',
          },
          no_schema: {
            type: 'boolean',
            description: "Export only each table's contents, not its definition",
          },
          tables: {
            type: 'array',
            description:
              'Filter the export to just one or more tables. Passing an empty array is the same as not passing anything and means: export all tables.',
            items: {
              type: 'string',
            },
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'database_id', 'output_format'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { database_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.d1.database.export(database_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
