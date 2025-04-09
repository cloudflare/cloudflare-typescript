// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.watermarks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_stream_watermarks',
  description: 'Retrieves details for a single watermark profile.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      identifier: {
        type: 'string',
        description: 'The unique identifier for a watermark profile.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier, ...body } = args;
  return client.stream.watermarks.get(identifier, body);
};

export default { metadata, tool, handler };
