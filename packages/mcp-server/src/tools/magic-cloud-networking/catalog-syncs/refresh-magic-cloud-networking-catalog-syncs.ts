// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}/refresh',
  operationId: 'catalog-syncs-refresh',
};

export const tool: Tool = {
  name: 'refresh_magic_cloud_networking_catalog_syncs',
  description:
    "Refresh a Catalog Sync's destination by running the sync policy against latest resource catalog (Closed Beta).",
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sync_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.catalogSyncs.refresh(sync_id, body));
};

export default { metadata, tool, handler };
