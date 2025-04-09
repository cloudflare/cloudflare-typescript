// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets.versions.entries',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_versions_datasets_dlp_zero_trust_entries',
  description:
    'This is used for multi-column EDMv2 datasets. The EDMv2 format can only be\ncreated in the Cloudflare dashboard.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      dataset_id: {
        type: 'string',
      },
      version: {
        type: 'integer',
      },
      entry_id: {
        type: 'string',
      },
      body: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { entry_id, ...body } = args;
  return client.zeroTrust.dlp.datasets.versions.entries.create(entry_id, body);
};

export default { metadata, tool, handler };
