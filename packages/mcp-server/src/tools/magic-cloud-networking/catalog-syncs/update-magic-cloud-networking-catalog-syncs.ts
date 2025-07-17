// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}',
  operationId: 'catalog-syncs-update',
};

export const tool: Tool = {
  name: 'update_magic_cloud_networking_catalog_syncs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a Catalog Sync (Closed Beta).",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      sync_id: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      policy: {
        type: 'string',
      },
      update_mode: {
        type: 'string',
        enum: ['AUTO', 'MANUAL'],
      },
    },
    required: ['account_id', 'sync_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sync_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.catalogSyncs.update(sync_id, body));
};

export default { metadata, tool, handler };
