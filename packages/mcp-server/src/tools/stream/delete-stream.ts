// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/stream/{identifier}',
  operationId: 'stream-videos-delete-video',
};

export const tool: Tool = {
  name: 'delete_stream',
  description: 'Deletes a video and its copies from Cloudflare Stream.',
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
    required: ['account_id', 'identifier'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, ...body } = args as any;
  const response = await client.stream.delete(identifier, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
