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
  name: 'list_stream_watermarks',
  description: 'Lists all watermark profiles for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.watermarks.list(body);
};

export default { metadata, tool, handler };
