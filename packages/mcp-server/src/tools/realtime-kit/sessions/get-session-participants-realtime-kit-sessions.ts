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
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants',
  operationId: 'GetSessionParticipants',
};

export const tool: Tool = {
  name: 'get_session_participants_realtime_kit_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of participants for the given session ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/session_get_session_participants_response',\n  $defs: {\n    session_get_session_participants_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            participants: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'Participant ID. This maps to the corresponding peerId.'\n                  },\n                  created_at: {\n                    type: 'string',\n                    description: 'timestamp when this participant was created.'\n                  },\n                  custom_participant_id: {\n                    type: 'string',\n                    description: 'ID passed by client to create this participant.'\n                  },\n                  display_name: {\n                    type: 'string',\n                    description: 'Display name of participant when joining the session.'\n                  },\n                  duration: {\n                    type: 'number',\n                    description: 'number of minutes for which the participant was in the session.'\n                  },\n                  joined_at: {\n                    type: 'string',\n                    description: 'timestamp at which participant joined the session.'\n                  },\n                  left_at: {\n                    type: 'string',\n                    description: 'timestamp at which participant left the session.'\n                  },\n                  preset_name: {\n                    type: 'string',\n                    description: 'Name of the preset associated with the participant.'\n                  },\n                  updated_at: {\n                    type: 'string',\n                    description: 'timestamp when this participant\\'s data was last updated.'\n                  },\n                  user_id: {\n                    type: 'string',\n                    description: 'User id for this participant.'\n                  }\n                }\n              }\n            }\n          }\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
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
      session_id: {
        type: 'string',
      },
      include_peer_events: {
        type: 'boolean',
        description: 'if true, response includes all the peer events of participants.',
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
      sort_by: {
        type: 'string',
        enum: ['joinedAt', 'duration'],
      },
      sort_order: {
        type: 'string',
        enum: ['ASC', 'DESC'],
      },
      view: {
        type: 'string',
        description:
          'In breakout room sessions, the view parameter can be set to `raw` for session specific duration for participants or `consolidated` to accumulate breakout room durations.',
        enum: ['raw', 'consolidated'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id', 'session_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { session_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.realtimeKit.sessions.getSessionParticipants(session_id, body),
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
