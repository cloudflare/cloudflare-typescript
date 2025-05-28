// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.destinations.pagerduty',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/alerting/v3/destinations/pagerduty',
  operationId: 'notification-destinations-with-pager-duty-delete-pager-duty-services',
};

export const tool: Tool = {
  name: 'delete_destinations_alerting_pagerduty',
  description: 'Deletes all the PagerDuty Services connected to the account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.alerting.destinations.pagerduty.delete(body);
};

export default { metadata, tool, handler };
