// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.live_inputs.outputs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_live_inputs_stream_outputs',
  description: 'Updates the state of an output.',
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
      output_identifier: {
        type: 'string',
        description: 'A unique identifier for the output.',
      },
      enabled: {
        type: 'boolean',
        description:
          'When enabled, live video streamed to the associated live input will be sent to the output URL. When disabled, live video will not be sent to the output URL, even when streaming to the associated live input. Use this to control precisely when you start and stop simulcasting to specific destinations like YouTube and Twitch.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { output_identifier, ...body } = args;
  return client.stream.liveInputs.outputs.update(output_identifier, body);
};

export default { metadata, tool, handler };
