// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.datasets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_threat_events_cloudforce_one_datasets',
  description: 'Updates an existing dataset',
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
      isPublic: {
        type: 'boolean',
        description:
          'If true, then anyone can search the dataset. If false, then its limited to the account. ',
      },
      name: {
        type: 'string',
        description: 'Used to describe the dataset within the account context',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { dataset_id, ...body } = args;
  return client.cloudforceOne.threatEvents.datasets.edit(dataset_id, body);
};

export default { metadata, tool, handler };
