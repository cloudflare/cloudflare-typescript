// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.insights',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_threat_events_cloudforce_one_insights',
  description: 'Reads an event insight',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID',
      },
      event_id: {
        type: 'string',
        description: 'Event UUID',
      },
      insight_id: {
        type: 'string',
        description: 'Insight UUID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { insight_id, ...body } = args;
  return client.cloudforceOne.threatEvents.insights.get(insight_id, body);
};

export default { metadata, tool, handler };
