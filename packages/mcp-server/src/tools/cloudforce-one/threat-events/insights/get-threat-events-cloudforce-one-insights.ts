// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.insights',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/{event_id}/insight/{insight_id}',
  operationId: 'get_EventInsightRead',
};

export const tool: Tool = {
  name: 'get_threat_events_cloudforce_one_insights',
  description: 'Reads an event insight',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID.',
      },
      event_id: {
        type: 'string',
        description: 'Event UUID.',
      },
      insight_id: {
        type: 'string',
        description: 'Insight UUID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { insight_id, ...body } = args as any;
  return asTextContentResult(await client.cloudforceOne.threatEvents.insights.get(insight_id, body));
};

export default { metadata, tool, handler };
