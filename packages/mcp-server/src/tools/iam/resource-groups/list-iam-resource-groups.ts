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
  name: 'list_iam_resource_groups',
  description: 'List all the resource groups for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      id: {
        type: 'string',
        description: 'ID of the resource group to be fetched.',
      },
      name: {
        type: 'string',
        description: 'Name of the resource group to be fetched.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.iam.resourceGroups.list(body);
};

export default { metadata, tool, handler };
