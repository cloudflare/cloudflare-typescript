// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.raw',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}',
  operationId: 'get_EventRawRead',
};

export const tool: Tool = {
  name: 'get_threat_events_cloudforce_one_raw',
  description: 'Reads data for a raw event',
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
      raw_id: {
        type: 'string',
        description: 'Raw Event UUID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { raw_id, ...body } = args as any;
  return asTextContentResult(await client.cloudforceOne.threatEvents.raw.get(raw_id, body));
};

export default { metadata, tool, handler };
