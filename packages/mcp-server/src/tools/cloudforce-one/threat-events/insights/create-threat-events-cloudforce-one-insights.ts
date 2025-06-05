// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.insights',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/{event_id}/insight/create',
  operationId: 'post_EventInsightCreate',
};

export const tool: Tool = {
  name: 'create_threat_events_cloudforce_one_insights',
  description: 'Adds an insight to an event',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      event_id: {
        type: 'string',
        description: 'Event UUID.',
      },
      content: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_id, ...body } = args as any;
  return asTextContentResult(await client.cloudforceOne.threatEvents.insights.create(event_id, body));
};

export default { metadata, tool, handler };
