// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.resources',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cloud/resources/{resource_id}',
  operationId: 'resources-catalog-read',
};

export const tool: Tool = {
  name: 'get_magic_cloud_networking_resources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead an resource from the Resource Catalog (Closed Beta).",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      resource_id: {
        type: 'string',
      },
      v2: {
        type: 'boolean',
      },
    },
    required: ['account_id', 'resource_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { resource_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.resources.get(resource_id, body));
};

export default { metadata, tool, handler };
