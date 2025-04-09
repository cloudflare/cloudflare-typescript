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
  name: 'get_threat_events_cloudforce_one_datasets',
  description: 'Reads a dataset',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { dataset_id, ...body } = args;
  return client.cloudforceOne.threatEvents.datasets.get(dataset_id, body);
};

export default { metadata, tool, handler };
