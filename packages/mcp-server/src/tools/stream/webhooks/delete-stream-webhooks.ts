// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/stream/webhook',
  operationId: 'stream-webhook-delete-webhooks',
};

export const tool: Tool = {
  name: 'delete_stream_webhooks',
  description: 'Deletes a webhook.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.stream.webhooks.delete(body);
};

export default { metadata, tool, handler };
