// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.destinations.webhooks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_destinations_alerting_webhooks',
  description: 'Delete a configured webhook destination.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
      webhook_id: {
        type: 'string',
        description: 'The unique identifier of a webhook',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { webhook_id, ...body } = args;
  return client.alerting.destinations.webhooks.delete(webhook_id, body);
};

export default { metadata, tool, handler };
