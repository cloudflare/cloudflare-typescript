// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.livestreams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/livestreams/{livestream_id}',
  operationId: 'get-v2-livestream-session-livestream-id',
};

export const tool: Tool = {
  name: 'get_livestream_session_for_livestream_id_realtime_kit_livestreams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns details of a livestream with sessions for the given livestream ID. Retreive the livestream ID using the `Start livestreaming a meeting` API.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/livestream_get_livestream_session_for_livestream_id_response',\n  $defs: {\n    livestream_get_livestream_session_for_livestream_id_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            livestream: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'ID of the livestream.'\n                },\n                created_at: {\n                  type: 'string',\n                  description: 'Timestamp the object was created at. The time is returned in ISO format.'\n                },\n                disabled: {\n                  type: 'string',\n                  description: 'Specifies if the livestream was disabled.'\n                },\n                ingest_server: {\n                  type: 'string',\n                  description: 'The server URL to which the RTMP encoder sends the video and audio data.'\n                },\n                meeting_id: {\n                  type: 'string',\n                  description: 'The ID of the meeting.'\n                },\n                name: {\n                  type: 'string',\n                  description: 'Name of the livestream.'\n                },\n                playback_url: {\n                  type: 'string',\n                  description: 'The web address that viewers can use to watch the livestream.'\n                },\n                status: {\n                  type: 'string',\n                  enum: [                    'LIVE',\n                    'IDLE',\n                    'ERRORED',\n                    'INVOKED'\n                  ]\n                },\n                stream_key: {\n                  type: 'string',\n                  description: 'Unique key for accessing each livestream.'\n                },\n                updated_at: {\n                  type: 'string',\n                  description: 'Timestamp the object was updated at. The time is returned in ISO format.'\n                }\n              }\n            },\n            paging: {\n              type: 'object',\n              properties: {\n                end_offset: {\n                  type: 'integer'\n                },\n                start_offset: {\n                  type: 'integer'\n                },\n                total_count: {\n                  type: 'integer'\n                }\n              }\n            },\n            session: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'ID of the session.'\n                },\n                created_at: {\n                  type: 'string',\n                  description: 'Timestamp the object was created at. The time is returned in ISO format.',\n                  format: 'date-time'\n                },\n                err_message: {\n                  type: 'string'\n                },\n                ingest_seconds: {\n                  type: 'number',\n                  description: 'The time duration for which the input was given or the meeting was streamed.'\n                },\n                invoked_time: {\n                  type: 'string',\n                  description: 'Timestamp the object was invoked. The time is returned in ISO format.',\n                  format: 'date-time'\n                },\n                livestream_id: {\n                  type: 'string'\n                },\n                started_time: {\n                  type: 'string',\n                  description: 'Timestamp the object was started. The time is returned in ISO format.',\n                  format: 'date-time'\n                },\n                stopped_time: {\n                  type: 'string',\n                  description: 'Timestamp the object was stopped. The time is returned in ISO format.',\n                  format: 'date-time'\n                },\n                updated_at: {\n                  type: 'string',\n                  description: 'Timestamp the object was updated at. The time is returned in ISO format.',\n                  format: 'date-time'\n                },\n                viewer_seconds: {\n                  type: 'number',\n                  description: 'The total view time for which the viewers watched the stream.'\n                }\n              }\n            }\n          }\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
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
      livestream_id: {
        type: 'string',
      },
      page_no: {
        type: 'integer',
        description: 'The page number from which you want your page search results to be displayed.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of results per page.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id', 'livestream_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { livestream_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.realtimeKit.livestreams.getLivestreamSessionForLivestreamID(livestream_id, body),
      ),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
