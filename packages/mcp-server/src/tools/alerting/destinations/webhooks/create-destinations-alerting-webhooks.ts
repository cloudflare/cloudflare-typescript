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
  name: 'create_destinations_alerting_webhooks',
  description: 'Creates a new webhook destination.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
      name: {
        type: 'string',
        description:
          'The name of the webhook destination. This will be included in the request body when you receive a webhook notification.',
      },
      url: {
        type: 'string',
        description: 'The POST endpoint to call when dispatching a notification.',
      },
      secret: {
        type: 'string',
        description:
          'Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supported destinations. Secrets are not returned in any API response body.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.alerting.destinations.webhooks.create(body);
};

export default { metadata, tool, handler };
