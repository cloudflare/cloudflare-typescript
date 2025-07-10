// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cloud/catalog-syncs',
  operationId: 'catalog-syncs-list',
};

export const tool: Tool = {
  name: 'list_magic_cloud_networking_catalog_syncs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Catalog Syncs (Closed Beta).",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.magicCloudNetworking.catalogSyncs.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
