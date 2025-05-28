// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.live_inputs.outputs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}',
  operationId: 'stream-live-inputs-delete-an-output',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { output_identifier, ...body } = args as any;
  return client.stream.liveInputs.outputs.delete(output_identifier, body);
};

export default { metadata, tool, handler };
