// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs.prebuilt_policies',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_catalog_syncs_magic_cloud_networking_prebuilt_policies',
  description: 'List prebuilt catalog sync policies (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      destination_type: {
        type: 'string',
        description: 'specify type of destination, omit to return all',
        enum: ['NONE', 'ZERO_TRUST_LIST'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicCloudNetworking.catalogSyncs.prebuiltPolicies.list(body);
};

export default { metadata, tool, handler };
