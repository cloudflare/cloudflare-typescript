// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.live_inputs',
  operation: 'write',
  tags: [],
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { live_input_identifier, ...body } = args;
  return client.stream.liveInputs.delete(live_input_identifier, body);
};

export default { metadata, tool, handler };
