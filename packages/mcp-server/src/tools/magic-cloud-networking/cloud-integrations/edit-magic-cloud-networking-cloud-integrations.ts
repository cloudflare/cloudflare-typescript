// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.cloud_integrations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_magic_cloud_networking_cloud_integrations',
  description: 'Update a Cloud Integration (Closed Beta)',
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { provider_id, ...body } = args;
  return client.magicCloudNetworking.cloudIntegrations.edit(provider_id, body);
};

export default { metadata, tool, handler };
