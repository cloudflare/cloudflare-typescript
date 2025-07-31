// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.downloads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/stream/{identifier}/downloads',
  operationId: 'stream-m-p-4-downloads-create-downloads',
};

export const tool: Tool = {
  name: 'create_stream_downloads',
  description: 'Creates a download for a video when a video is ready to view.',
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
      body: {
        type: 'object',
      },
    },
    required: ['account_id', 'identifier', 'body'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, ...body } = args as any;
  return asTextContentResult((await client.stream.downloads.create(identifier, body)) as object);
};

export default { metadata, tool, handler };
