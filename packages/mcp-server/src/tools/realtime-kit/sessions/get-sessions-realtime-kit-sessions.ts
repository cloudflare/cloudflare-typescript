// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/sessions',
  operationId: 'GetSessions',
};

export const tool: Tool = {
  name: 'get_sessions_realtime_kit_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns details of all sessions of an App.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/session_get_sessions_response',\n  $defs: {\n    session_get_sessions_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            sessions: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'ID of the session'\n                  },\n                  associated_id: {\n                    type: 'string',\n                    description: 'ID of the meeting this session is associated with. In the case of V2 meetings, it is always a UUID. In V1 meetings, it is a room name of the form `abcdef-ghijkl`'\n                  },\n                  created_at: {\n                    type: 'string',\n                    description: 'timestamp when session created'\n                  },\n                  live_participants: {\n                    type: 'number',\n                    description: 'number of participants currently in the session'\n                  },\n                  max_concurrent_participants: {\n                    type: 'number',\n                    description: 'number of maximum participants that were in the session'\n                  },\n                  meeting_display_name: {\n                    type: 'string',\n                    description: 'Title of the meeting this session belongs to'\n                  },\n                  minutes_consumed: {\n                    type: 'number',\n                    description: 'number of minutes consumed since the session started'\n                  },\n                  organization_id: {\n                    type: 'string',\n                    description: 'App id that hosted this session'\n                  },\n                  started_at: {\n                    type: 'string',\n                    description: 'timestamp when session started'\n                  },\n                  status: {\n                    type: 'string',\n                    description: 'current status of session',\n                    enum: [                      'LIVE',\n                      'ENDED'\n                    ]\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'type of session',\n                    enum: [                      'meeting',\n                      'livestream',\n                      'participant'\n                    ]\n                  },\n                  updated_at: {\n                    type: 'string',\n                    description: 'timestamp when session was last updated'\n                  },\n                  breakout_rooms: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      additionalProperties: true\n                    }\n                  },\n                  ended_at: {\n                    type: 'string',\n                    description: 'timestamp when session ended'\n                  },\n                  meta: {\n                    type: 'object',\n                    description: 'Any meta data about session.',\n                    additionalProperties: true\n                  }\n                },\n                required: [                  'id',\n                  'associated_id',\n                  'created_at',\n                  'live_participants',\n                  'max_concurrent_participants',\n                  'meeting_display_name',\n                  'minutes_consumed',\n                  'organization_id',\n                  'started_at',\n                  'status',\n                  'type',\n                  'updated_at'\n                ]\n              }\n            }\n          }\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
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
      associated_id: {
        type: 'string',
        description: 'ID of the meeting that sessions should be associated with',
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
      participants: {
        type: 'string',
      },
      per_page: {
        type: 'number',
        description: 'Number of results per page',
      },
      search: {
        type: 'string',
        description: 'Search string that matches sessions based on meeting title, meeting ID, and session ID',
      },
      sort_by: {
        type: 'string',
        enum: ['minutesConsumed', 'createdAt'],
      },
      sort_order: {
        type: 'string',
        enum: ['ASC', 'DESC'],
      },
      start_time: {
        type: 'string',
        description:
          'The start time range for which you want to retrieve the meetings. The time must be specified in ISO format.',
        format: 'date-time',
      },
      status: {
        type: 'string',
        enum: ['LIVE', 'ENDED'],
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
      await maybeFilter(jq_filter, await client.realtimeKit.sessions.getSessions(app_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
