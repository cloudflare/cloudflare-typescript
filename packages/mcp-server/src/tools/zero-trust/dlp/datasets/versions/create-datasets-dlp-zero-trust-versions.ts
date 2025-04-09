// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets.versions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_datasets_dlp_zero_trust_versions',
  description:
    'This is used for multi-column EDMv2 datasets. The EDMv2 format can only be\ncreated in the Cloudflare dashboard. The columns in the response appear in\nthe same order as in the request.',
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
      body: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'Existing Column',
              properties: {
                entry_id: {
                  type: 'string',
                },
                header_name: {
                  type: 'string',
                },
                num_cells: {
                  type: 'integer',
                },
              },
              required: ['entry_id'],
            },
            {
              type: 'object',
              title: 'New Column',
              properties: {
                entry_name: {
                  type: 'string',
                },
                header_name: {
                  type: 'string',
                },
                num_cells: {
                  type: 'integer',
                },
              },
              required: ['entry_name'],
            },
          ],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { version, ...body } = args;
  return client.zeroTrust.dlp.datasets.versions.create(version, body);
};

export default { metadata, tool, handler };
