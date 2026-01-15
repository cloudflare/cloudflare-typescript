// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database.time_travel',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/d1/database/{database_id}/time_travel/bookmark',
  operationId: 'cloudflare-d1-time-travel-get-bookmark',
};

export const tool: Tool = {
  name: 'get_bookmark_database_d1_time_travel',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the current bookmark, or the nearest bookmark at or before a provided timestamp.\nBookmarks can be used with the restore endpoint to revert the database to a previous point in time.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/time_travel_get_bookmark_response',\n  $defs: {\n    time_travel_get_bookmark_response: {\n      type: 'object',\n      properties: {\n        bookmark: {\n          type: 'string',\n          description: 'A bookmark representing a specific state of the database at a specific point in time.'\n        }\n      }\n    }\n  }\n}\n```",
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
      timestamp: {
        type: 'string',
        description:
          'An optional ISO 8601 timestamp. If provided, returns the nearest available bookmark at or before this timestamp. If omitted, returns the current bookmark.',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { database_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.d1.database.timeTravel.getBookmark(database_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
