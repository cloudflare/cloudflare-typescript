// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary',
  operationId: 'post-sessions-session_id-summary',
};

export const tool: Tool = {
  name: 'generate_summary_of_transcripts_realtime_kit_sessions',
  description: 'Trigger Summary generation of Transcripts for the session ID.',
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
    },
    required: ['account_id', 'app_id', 'session_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  const response = await client.realtimeKit.sessions
    .generateSummaryOfTranscripts(session_id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
