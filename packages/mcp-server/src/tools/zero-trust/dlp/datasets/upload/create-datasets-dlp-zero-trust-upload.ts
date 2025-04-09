// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets.upload',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_datasets_dlp_zero_trust_upload',
  description: 'Prepare to upload a new version of a dataset',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      dataset_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { dataset_id, ...body } = args;
  return client.zeroTrust.dlp.datasets.upload.create(dataset_id, body);
};

export default { metadata, tool, handler };
