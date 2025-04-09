// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.datasets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'raw_threat_events_cloudforce_one_datasets',
  description: 'Reads data for a raw event',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID',
      },
      dataset_id: {
        type: 'string',
        description: 'Dataset ID',
      },
      event_id: {
        type: 'string',
        description: 'Event ID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { event_id, ...body } = args;
  return client.cloudforceOne.threatEvents.datasets.raw(event_id, body);
};

export default { metadata, tool, handler };
