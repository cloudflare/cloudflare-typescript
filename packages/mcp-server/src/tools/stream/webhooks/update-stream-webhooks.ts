// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.webhooks',
  operation: 'write',
  tags: [],
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.webhooks.update(body);
};

export default { metadata, tool, handler };
