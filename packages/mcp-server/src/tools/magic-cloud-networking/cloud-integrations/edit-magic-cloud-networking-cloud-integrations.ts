// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.cloud_integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/magic/cloud/providers/{provider_id}',
  operationId: 'providers-patch',
};

export const tool: Tool = {
  name: 'edit_magic_cloud_networking_cloud_integrations',
  description: 'Update a Cloud Integration (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
      },
      aws_arn: {
        type: 'string',
      },
      azure_subscription_id: {
        type: 'string',
      },
      azure_tenant_id: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      friendly_name: {
        type: 'string',
      },
      gcp_project_id: {
        type: 'string',
      },
      gcp_service_account_email: {
        type: 'string',
      },
    },
    required: ['account_id', 'provider_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { provider_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.cloudIntegrations.edit(provider_id, body));
};

export default { metadata, tool, handler };
