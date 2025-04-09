// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_magic_cloud_networking_catalog_syncs',
  description: 'Create a new Catalog Sync (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      destination_type: {
        type: 'string',
        enum: ['NONE', 'ZERO_TRUST_LIST'],
      },
      name: {
        type: 'string',
      },
      update_mode: {
        type: 'string',
        enum: ['AUTO', 'MANUAL'],
      },
      description: {
        type: 'string',
      },
      policy: {
        type: 'string',
      },
      forwarded: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicCloudNetworking.catalogSyncs.create(body);
};

export default { metadata, tool, handler };
