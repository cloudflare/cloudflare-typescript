// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.cloud_integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cloud/providers/{provider_id}',
  operationId: 'providers-read',
};

export const tool: Tool = {
  name: 'get_magic_cloud_networking_cloud_integrations',
  description: 'Read a Cloud Integration (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
      },
      status: {
        type: 'boolean',
      },
    },
    required: ['account_id', 'provider_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { provider_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.cloudIntegrations.get(provider_id, body));
};

export default { metadata, tool, handler };
