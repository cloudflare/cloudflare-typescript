// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_dlp_zero_trust_datasets',
  description: 'Update details about a dataset',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      dataset_id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'The description of the dataset',
      },
      name: {
        type: 'string',
        description: 'The name of the dataset, must be unique',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { dataset_id, ...body } = args;
  return client.zeroTrust.dlp.datasets.update(dataset_id, body);
};

export default { metadata, tool, handler };
