// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.resource_groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_iam_resource_groups',
  description: 'Get information about a specific resource group in an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      resource_group_id: {
        type: 'string',
        description: 'Resource Group identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { resource_group_id, ...body } = args;
  return client.iam.resourceGroups.get(resource_group_id, body);
};

export default { metadata, tool, handler };
