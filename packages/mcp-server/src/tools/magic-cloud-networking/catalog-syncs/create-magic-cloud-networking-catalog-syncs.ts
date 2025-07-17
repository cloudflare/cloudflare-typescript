// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/cloud/catalog-syncs',
  operationId: 'catalog-syncs-create',
};

export const tool: Tool = {
  name: 'create_magic_cloud_networking_catalog_syncs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Catalog Sync (Closed Beta).",
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
    required: ['account_id', 'destination_type', 'name', 'update_mode'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.magicCloudNetworking.catalogSyncs.create(body));
};

export default { metadata, tool, handler };
