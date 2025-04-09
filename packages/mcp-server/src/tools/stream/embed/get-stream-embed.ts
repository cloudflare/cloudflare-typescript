// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.embed',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_stream_embed',
  description:
    'Fetches an HTML code snippet to embed a video in a web page delivered through Cloudflare. On success, returns an HTML fragment for use on web pages to display a video. On failure, returns a JSON response body.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
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
  return client.stream.embed.get(identifier, body);
};

export default { metadata, tool, handler };
