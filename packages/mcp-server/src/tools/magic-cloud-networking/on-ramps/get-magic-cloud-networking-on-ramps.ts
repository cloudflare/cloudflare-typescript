// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cloud/onramps/{onramp_id}',
  operationId: 'onramps-read',
};

export const tool: Tool = {
  name: 'get_magic_cloud_networking_on_ramps',
  description: 'Read an On-ramp (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      onramp_id: {
        type: 'string',
      },
      planned_resources: {
        type: 'boolean',
      },
      post_apply_resources: {
        type: 'boolean',
      },
      status: {
        type: 'boolean',
      },
      vpcs: {
        type: 'boolean',
      },
    },
    required: ['account_id', 'onramp_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { onramp_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.onRamps.get(onramp_id, body));
};

export default { metadata, tool, handler };
