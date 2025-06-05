// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}',
  operationId: 'catalog-syncs-delete',
};

export const tool: Tool = {
  name: 'delete_magic_cloud_networking_catalog_syncs',
  description: 'Delete a Catalog Sync (Closed Beta).',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sync_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.catalogSyncs.delete(sync_id, body));
};

export default { metadata, tool, handler };
