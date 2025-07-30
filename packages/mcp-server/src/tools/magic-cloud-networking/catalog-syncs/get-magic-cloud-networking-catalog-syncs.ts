// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}',
  operationId: 'catalog-syncs-read',
};

export const tool: Tool = {
  name: 'get_magic_cloud_networking_catalog_syncs',
  description: 'Read a Catalog Sync (Closed Beta).',
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
    required: ['account_id', 'sync_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sync_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.catalogSyncs.get(sync_id, body));
};

export default { metadata, tool, handler };
