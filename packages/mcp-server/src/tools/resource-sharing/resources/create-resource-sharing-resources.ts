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
  name: 'create_resource_sharing_resources',
  description: 'Create a new share resource',
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
      meta: {
        type: 'object',
        description: 'Resource Metadata.',
      },
      resource_account_id: {
        type: 'string',
        description: 'Account identifier.',
      },
      resource_id: {
        type: 'string',
        description: 'Share Resource identifier.',
      },
      resource_type: {
        type: 'string',
        description: 'Resource Type.',
        enum: ['custom-ruleset', 'widget'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { share_id, ...body } = args;
  return client.resourceSharing.resources.create(share_id, body);
};

export default { metadata, tool, handler };
