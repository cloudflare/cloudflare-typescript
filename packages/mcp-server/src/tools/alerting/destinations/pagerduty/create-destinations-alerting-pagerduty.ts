// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.destinations.pagerduty',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/alerting/v3/destinations/pagerduty/connect',
  operationId: 'notification-destinations-with-pager-duty-connect-pager-duty',
};

export const tool: Tool = {
  name: 'create_destinations_alerting_pagerduty',
  description: 'Creates a new token for integrating with PagerDuty.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.alerting.destinations.pagerduty.create(body));
};

export default { metadata, tool, handler };
