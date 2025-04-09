// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.downloads',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_stream_downloads',
  description: 'Lists the downloads created for a video.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      identifier: {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier, ...body } = args;
  return client.stream.downloads.get(identifier, body);
};

export default { metadata, tool, handler };
