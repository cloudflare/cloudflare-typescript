// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.meetings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}/token',
  operationId: 'regenerate_token',
};

export const tool: Tool = {
  name: 'refresh_participant_token_realtime_kit_meetings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRegenerates participant's authentication token for the given meeting and participant ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/meeting_refresh_participant_token_response',\n  $defs: {\n    meeting_refresh_participant_token_response: {\n      type: 'object',\n      title: 'GenericSuccessResponse',\n      properties: {\n        data: {\n          type: 'object',\n          description: 'Data returned by the operation',\n          properties: {\n            token: {\n              type: 'string',\n              description: 'Regenerated participant\\'s authentication token.'\n            }\n          },\n          required: [            'token'\n          ]\n        },\n        success: {\n          type: 'boolean',\n          description: 'Success status of the operation'\n        }\n      },\n      required: [        'data',\n        'success'\n      ]\n    }\n  }\n}\n```",
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
      participant_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id', 'meeting_id', 'participant_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { participant_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.realtimeKit.meetings.refreshParticipantToken(participant_id, body),
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
