// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.cloud_integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/cloud/providers',
  operationId: 'providers-create',
};

export const tool: Tool = {
  name: 'create_magic_cloud_networking_cloud_integrations',
  description: 'Create a new Cloud Integration (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      cloud_type: {
        type: 'string',
        enum: ['AWS', 'AZURE', 'GOOGLE', 'CLOUDFLARE'],
      },
      friendly_name: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      forwarded: {
        type: 'string',
      },
    },
    required: ['account_id', 'cloud_type', 'friendly_name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.magicCloudNetworking.cloudIntegrations.create(body));
};

export default { metadata, tool, handler };
