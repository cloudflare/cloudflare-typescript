// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cloud/onramps',
  operationId: 'onramps-list',
};

export const tool: Tool = {
  name: 'list_magic_cloud_networking_on_ramps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList On-ramps (Closed Beta).",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      desc: {
        type: 'boolean',
      },
      order_by: {
        type: 'string',
        description: 'One of ["updated_at", "id", "cloud_type", "name"].',
      },
      status: {
        type: 'boolean',
      },
      vpcs: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.magicCloudNetworking.onRamps.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
