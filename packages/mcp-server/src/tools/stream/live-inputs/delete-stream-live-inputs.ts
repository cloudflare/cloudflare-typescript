// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.live_inputs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/stream/live_inputs/{live_input_identifier}',
  operationId: 'stream-live-inputs-delete-a-live-input',
};

export const tool: Tool = {
  name: 'delete_stream_live_inputs',
  description:
    'Prevents a live input from being streamed to and makes the live input inaccessible to any future API calls.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      live_input_identifier: {
        type: 'string',
        description: 'A unique identifier for a live input.',
      },
    },
    required: ['account_id', 'live_input_identifier'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { live_input_identifier, ...body } = args as any;
  const response = await client.stream.liveInputs.delete(live_input_identifier, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
