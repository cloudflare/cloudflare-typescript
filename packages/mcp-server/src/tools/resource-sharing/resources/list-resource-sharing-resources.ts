// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing.resources',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_resource_sharing_resources',
  description: 'List share resources by share ID.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier.',
      },
      share_id: {
        type: 'string',
        description: 'Share identifier tag.',
      },
      page: {
        type: 'integer',
        description: 'Page number.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of objects to return per page.',
      },
      resource_type: {
        type: 'string',
        description: 'Filter share resources by resource_type.',
        enum: ['custom-ruleset', 'widget'],
      },
      status: {
        type: 'string',
        description: 'Filter share resources by status.',
        enum: ['active', 'deleting', 'deleted'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { share_id, ...body } = args;
  return client.resourceSharing.resources.list(share_id, body);
};

export default { metadata, tool, handler };
