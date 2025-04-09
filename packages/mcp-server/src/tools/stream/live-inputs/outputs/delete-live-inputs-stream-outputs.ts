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
  name: 'delete_live_inputs_stream_outputs',
  description: 'Deletes an output and removes it from the associated live input.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { output_identifier, ...body } = args;
  return client.stream.liveInputs.outputs.delete(output_identifier, body);
};

export default { metadata, tool, handler };
