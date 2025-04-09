// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.destinations.pagerduty',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'link_destinations_alerting_pagerduty',
  description: 'Links PagerDuty with the account using the integration token.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
      token_id: {
        type: 'string',
        description: 'The token integration key',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { token_id, ...body } = args;
  return client.alerting.destinations.pagerduty.link(token_id, body);
};

export default { metadata, tool, handler };
