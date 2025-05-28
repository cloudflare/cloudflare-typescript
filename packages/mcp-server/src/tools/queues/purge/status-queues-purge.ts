// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues.purge',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/queues/{queue_id}/purge',
  operationId: 'queues-purge-get',
};

export const tool: Tool = {
  name: 'status_queues_purge',
  description: "Get details about a Queue's purge status.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'A Resource identifier.',
      },
      queue_id: {
        type: 'string',
        description: 'A Resource identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { queue_id, ...body } = args as any;
  return client.queues.purge.status(queue_id, body);
};

export default { metadata, tool, handler };
