// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.meetings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/meetings',
  operationId: 'get_all_meetings',
};

export const tool: Tool = {
  name: 'get_realtime_kit_meetings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns all meetings for the given App ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/meeting_get_response',\n  $defs: {\n    meeting_get_response: {\n      type: 'object',\n      title: 'PagingResponse',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'ID of the meeting.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'Timestamp the object was created at. The time is returned in ISO format.',\n                format: 'date-time'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Timestamp the object was updated at. The time is returned in ISO format.',\n                format: 'date-time'\n              },\n              live_stream_on_start: {\n                type: 'boolean',\n                description: 'Specifies if the meeting should start getting livestreamed on start.'\n              },\n              persist_chat: {\n                type: 'boolean',\n                description: 'Specifies if Chat within a meeting should persist for a week.'\n              },\n              record_on_start: {\n                type: 'boolean',\n                description: 'Specifies if the meeting should start getting recorded as soon as someone joins the meeting.'\n              },\n              session_keep_alive_time_in_secs: {\n                type: 'number',\n                description: 'Time in seconds, for which a session remains active, after the last participant has left the meeting.'\n              },\n              status: {\n                type: 'string',\n                description: 'Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an `INACTIVE` meeting.',\n                enum: [                  'ACTIVE',\n                  'INACTIVE'\n                ]\n              },\n              summarize_on_end: {\n                type: 'boolean',\n                description: 'Automatically generate summary of meetings using transcripts. Requires Transcriptions to be enabled, and can be retrieved via Webhooks or summary API.'\n              },\n              title: {\n                type: 'string',\n                description: 'Title of the meeting.'\n              }\n            },\n            required: [              'id',\n              'created_at',\n              'updated_at'\n            ]\n          }\n        },\n        paging: {\n          type: 'object',\n          properties: {\n            end_offset: {\n              type: 'number'\n            },\n            start_offset: {\n              type: 'number'\n            },\n            total_count: {\n              type: 'number'\n            }\n          },\n          required: [            'end_offset',\n            'start_offset',\n            'total_count'\n          ]\n        },\n        success: {\n          type: 'boolean'\n        }\n      },\n      required: [        'data',\n        'paging',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      app_id: {
        type: 'string',
        description: 'The app identifier tag.',
      },
      end_time: {
        type: 'string',
        description:
          'The end time range for which you want to retrieve the meetings. The time must be specified in ISO format.',
        format: 'date-time',
      },
      page_no: {
        type: 'number',
        description: 'The page number from which you want your page search results to be displayed.',
      },
      per_page: {
        type: 'number',
        description: 'Number of results per page',
      },
      search: {
        type: 'string',
        description: 'The search query string. You can search using the meeting ID or title.',
      },
      start_time: {
        type: 'string',
        description:
          'The start time range for which you want to retrieve the meetings. The time must be specified in ISO format.',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { app_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.realtimeKit.meetings.get(app_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
