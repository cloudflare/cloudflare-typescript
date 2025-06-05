// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.live_inputs.outputs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs',
  operationId: 'stream-live-inputs-create-a-new-output,-connected-to-a-live-input',
};

export const tool: Tool = {
  name: 'create_live_inputs_stream_outputs',
  description:
    'Creates a new output that can be used to simulcast or restream live video to other RTMP or SRT destinations. Outputs are always linked to a specific live input — one live input can have many outputs.',
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
      streamKey: {
        type: 'string',
        description: "The streamKey used to authenticate against an output's target.",
      },
      url: {
        type: 'string',
        description: 'The URL an output uses to restream.',
      },
      enabled: {
        type: 'boolean',
        description:
          'When enabled, live video streamed to the associated live input will be sent to the output URL. When disabled, live video will not be sent to the output URL, even when streaming to the associated live input. Use this to control precisely when you start and stop simulcasting to specific destinations like YouTube and Twitch.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { live_input_identifier, ...body } = args as any;
  return asTextContentResult(await client.stream.liveInputs.outputs.create(live_input_identifier, body));
};

export default { metadata, tool, handler };
