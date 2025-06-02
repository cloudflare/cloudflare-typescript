// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.resource_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/iam/resource_groups/{resource_group_id}',
  operationId: 'account-resource-group-delete',
};

export const tool: Tool = {
  name: 'delete_iam_resource_groups',
  description: 'Remove a resource group from an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      resource_group_id: {
        type: 'string',
        title: 'Resource Group Identifier',
        description: 'Resource Group identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { resource_group_id, ...body } = args as any;
  return client.iam.resourceGroups.delete(resource_group_id, body);
};

export default { metadata, tool, handler };
