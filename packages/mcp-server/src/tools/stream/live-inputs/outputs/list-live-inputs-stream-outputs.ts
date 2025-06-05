// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.live_inputs.outputs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs',
  operationId: 'stream-live-inputs-list-all-outputs-associated-with-a-specified-live-input',
};

export const tool: Tool = {
  name: 'list_live_inputs_stream_outputs',
  description: 'Retrieves all outputs associated with a specified live input.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { live_input_identifier, ...body } = args as any;
  return asTextContentResult(await client.stream.liveInputs.outputs.list(live_input_identifier, body));
};

export default { metadata, tool, handler };
