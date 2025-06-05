// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.cloud_integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/cloud/providers/{provider_id}/discover',
  operationId: 'providers-discover',
};

export const tool: Tool = {
  name: 'discover_magic_cloud_networking_cloud_integrations',
  description: 'Run discovery for a Cloud Integration (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
      },
      v2: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { provider_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.cloudIntegrations.discover(provider_id, body));
};

export default { metadata, tool, handler };
