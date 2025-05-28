// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.cloud_integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/cloud/providers/{provider_id}',
  operationId: 'providers-delete',
};

export const tool: Tool = {
  name: 'delete_magic_cloud_networking_cloud_integrations',
  description: 'Delete a Cloud Integration (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { provider_id, ...body } = args as any;
  return client.magicCloudNetworking.cloudIntegrations.delete(provider_id, body);
};

export default { metadata, tool, handler };
