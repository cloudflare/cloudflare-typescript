// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database.time_travel',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/d1/database/{database_id}/time_travel/restore',
  operationId: 'cloudflare-d1-time-travel-restore',
};

export const tool: Tool = {
  name: 'restore_database_d1_time_travel',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRestores a D1 database to a previous point in time either via a bookmark or a timestamp.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/time_travel_restore_response',\n  $defs: {\n    time_travel_restore_response: {\n      type: 'object',\n      description: 'Response from a time travel restore operation.',\n      properties: {\n        bookmark: {\n          type: 'string',\n          description: 'The new bookmark representing the state of the database after the restore operation.'\n        },\n        message: {\n          type: 'string',\n          description: 'A message describing the result of the restore operation.'\n        },\n        previous_bookmark: {\n          type: 'string',\n          description: 'The bookmark representing the state of the database before the restore operation. Can be used to undo the restore if needed.'\n        }\n      }\n    }\n  }\n}\n```",
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
      bookmark: {
        type: 'string',
        description: 'A bookmark to restore the database to. Required if `timestamp` is not provided.',
      },
      timestamp: {
        type: 'string',
        description:
          'An ISO 8601 timestamp to restore the database to. Required if `bookmark` is not provided.',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'database_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { database_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.d1.database.timeTravel.restore(database_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
