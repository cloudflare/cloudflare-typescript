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
  name: 'refresh_magic_cloud_networking_catalog_syncs',
  description:
    "Refresh a Catalog Sync's destination by running the sync policy against latest resource catalog (Closed Beta)",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      sync_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { sync_id, ...body } = args;
  return client.magicCloudNetworking.catalogSyncs.refresh(sync_id, body);
};

export default { metadata, tool, handler };
