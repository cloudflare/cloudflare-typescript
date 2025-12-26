// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants/{participant_id}',
  operationId: 'GetParticipantDetails',
};

export const tool: Tool = {
  name: 'get_session_participant_details_realtime_kit_sessions',
  description:
    'Returns details of the given participant ID along with call statistics for the given session ID.',
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
      participant_id: {
        type: 'string',
      },
      filters: {
        type: 'string',
        description:
          'Comma separated list of filters to apply. Note that there must be no spaces between the filters.',
        enum: ['device_info', 'ip_information', 'precall_network_information', 'events', 'quality_stats'],
      },
      include_peer_events: {
        type: 'boolean',
        description: 'if true, response includes all the peer events of participant.',
      },
    },
    required: ['account_id', 'app_id', 'session_id', 'participant_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { participant_id, ...body } = args as any;
  try {
    return asTextContentResult(
      await client.realtimeKit.sessions.getSessionParticipantDetails(participant_id, body),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
