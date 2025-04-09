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
  name: 'get_resource_sharing_resources',
  description: 'Get share resource by ID.',
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
      resource_id: {
        type: 'string',
        description: 'Share Resource identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { resource_id, ...body } = args;
  return client.resourceSharing.resources.get(resource_id, body);
};

export default { metadata, tool, handler };
