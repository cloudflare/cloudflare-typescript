// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.keys',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_stream_keys',
  description: 'Lists the video ID and creation date and time when a signing key was created.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.keys.get(body);
};

export default { metadata, tool, handler };
