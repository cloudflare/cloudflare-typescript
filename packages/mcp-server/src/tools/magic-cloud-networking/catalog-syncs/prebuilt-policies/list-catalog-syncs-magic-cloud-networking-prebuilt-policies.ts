// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs.prebuilt_policies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cloud/catalog-syncs/prebuilt-policies',
  operationId: 'catalog-syncs-prebuilt-policies-list',
};

export const tool: Tool = {
  name: 'list_catalog_syncs_magic_cloud_networking_prebuilt_policies',
  description: 'List prebuilt catalog sync policies (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      destination_type: {
        type: 'string',
        description: 'Specify type of destination, omit to return all.',
        enum: ['NONE', 'ZERO_TRUST_LIST'],
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.magicCloudNetworking.catalogSyncs.prebuiltPolicies.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
