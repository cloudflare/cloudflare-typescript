// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/stream/webhook',
  operationId: 'stream-webhook-create-webhooks',
};

export const tool: Tool = {
  name: 'update_stream_webhooks',
  description: 'Creates a webhook notification.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      notificationUrl: {
        type: 'string',
        description: 'The URL where webhooks will be sent.',
      },
    },
    required: ['account_id', 'notificationUrl'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.stream.webhooks.update(body)) as object);
};

export default { metadata, tool, handler };
