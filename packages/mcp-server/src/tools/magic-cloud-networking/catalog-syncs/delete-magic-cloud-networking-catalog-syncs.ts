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
  name: 'delete_magic_cloud_networking_catalog_syncs',
  description: 'Delete a Catalog Sync (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      sync_id: {
        type: 'string',
      },
      delete_destination: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { sync_id, ...body } = args;
  return client.magicCloudNetworking.catalogSyncs.delete(sync_id, body);
};

export default { metadata, tool, handler };
