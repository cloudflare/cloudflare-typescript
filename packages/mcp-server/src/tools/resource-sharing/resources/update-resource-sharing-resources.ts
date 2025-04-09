// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing.resources',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_resource_sharing_resources',
  description:
    'Update is not immediate, an updated share resource object with a new status will be returned.',
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
      meta: {
        type: 'object',
        description: 'Resource Metadata.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { resource_id, ...body } = args;
  return client.resourceSharing.resources.update(resource_id, body);
};

export default { metadata, tool, handler };
