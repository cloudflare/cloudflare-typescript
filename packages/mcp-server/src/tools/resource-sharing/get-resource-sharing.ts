// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_resource_sharing',
  description: 'Fetches share by ID.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { share_id, ...body } = args;
  return client.resourceSharing.get(share_id, body);
};

export default { metadata, tool, handler };
