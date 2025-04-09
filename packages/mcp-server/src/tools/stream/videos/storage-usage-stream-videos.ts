// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.videos',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'storage_usage_stream_videos',
  description: "Returns information about an account's storage use.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      creator: {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.videos.storageUsage(body);
};

export default { metadata, tool, handler };
