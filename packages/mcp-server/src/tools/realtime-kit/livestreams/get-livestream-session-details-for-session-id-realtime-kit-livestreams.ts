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
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/livestreams/sessions/{livestream-session-id}',
  operationId: 'get-v2-livestreams-livestream-session-id',
};

export const tool: Tool = {
  name: 'get_livestream_session_details_for_session_id_realtime_kit_livestreams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns livestream session details for the given livestream session ID. Retrieve the `livestream_session_id`using the `Fetch livestream session details using a session ID` API.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/livestream_get_livestream_session_details_for_session_id_response',\n  $defs: {\n    livestream_get_livestream_session_details_for_session_id_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The livestream ID.'\n            },\n            created_at: {\n              type: 'string',\n              description: 'Timestamp the object was created at. The time is returned in ISO format.',\n              format: 'date-time'\n            },\n            err_message: {\n              type: 'string',\n              description: 'The server URL to which the RTMP encoder sends the video and audio data.'\n            },\n            ingest_seconds: {\n              type: 'integer',\n              description: 'Name of the livestream.'\n            },\n            livestream_id: {\n              type: 'string'\n            },\n            started_time: {\n              type: 'string',\n              description: 'Unique key for accessing each livestream.'\n            },\n            stopped_time: {\n              type: 'string',\n              description: 'The web address that viewers can use to watch the livestream.'\n            },\n            updated_at: {\n              type: 'string',\n              description: 'Timestamp the object was updated at. The time is returned in ISO format.'\n            },\n            viewer_seconds: {\n              type: 'integer',\n              description: 'Specifies if the livestream was disabled.'\n            }\n          }\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
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
      'livestream-session-id': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id', 'livestream-session-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { 'livestream-session-id': livestream_session_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.realtimeKit.livestreams.getLivestreamSessionDetailsForSessionID(
          livestream_session_id,
          body,
        ),
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
