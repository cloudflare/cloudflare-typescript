// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/raw/{dataset_id}/{event_id}',
  operationId: 'get_EventRawReadDS',
};

export const tool: Tool = {
  name: 'raw_threat_events_cloudforce_one_datasets',
  description: 'Reads data for a raw event',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      dataset_id: {
        type: 'string',
        description: 'Dataset ID.',
      },
      event_id: {
        type: 'string',
        description: 'Event ID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_id, ...body } = args as any;
  return asTextContentResult(await client.cloudforceOne.threatEvents.datasets.raw(event_id, body));
};

export default { metadata, tool, handler };
