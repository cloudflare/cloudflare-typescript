// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.active-session',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/poll',
  operationId: 'CreatePoll',
};

export const tool: Tool = {
  name: 'create_poll_realtime_kit_active_session',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new poll in an active session for the given meeting ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/active_session_create_poll_response',\n  $defs: {\n    active_session_create_poll_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            action: {\n              type: 'string'\n            },\n            poll: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'ID of the poll'\n                },\n                options: {\n                  type: 'array',\n                  description: 'Answer options',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      count: {\n                        type: 'number'\n                      },\n                      text: {\n                        type: 'string',\n                        description: 'Text of the answer option'\n                      },\n                      votes: {\n                        type: 'array',\n                        items: {\n                          type: 'object',\n                          properties: {\n                            id: {\n                              type: 'string'\n                            },\n                            name: {\n                              type: 'string'\n                            }\n                          },\n                          required: [                            'id',\n                            'name'\n                          ]\n                        }\n                      }\n                    },\n                    required: [                      'count',\n                      'text',\n                      'votes'\n                    ]\n                  }\n                },\n                question: {\n                  type: 'string',\n                  description: 'Question asked by the poll'\n                },\n                anonymous: {\n                  type: 'boolean'\n                },\n                created_by: {\n                  type: 'string'\n                },\n                hide_votes: {\n                  type: 'boolean'\n                },\n                voted: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                }\n              },\n              required: [                'id',\n                'options',\n                'question'\n              ]\n            }\n          }\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
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
      meeting_id: {
        type: 'string',
      },
      options: {
        type: 'array',
        description: 'Different options for the question',
        items: {
          type: 'string',
        },
      },
      question: {
        type: 'string',
        description: 'Question of the poll',
      },
      anonymous: {
        type: 'boolean',
        description: 'if voters on a poll are anonymous',
      },
      hide_votes: {
        type: 'boolean',
        description: 'if votes on an option are visible before a person votes',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id', 'meeting_id', 'options', 'question'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { meeting_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.realtimeKit.activeSession.createPoll(meeting_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
