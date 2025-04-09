// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1.stats',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_v1_images_stats',
  description: 'Fetch usage statistics details for Cloudflare Images.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.images.v1.stats.get(body);
};

export default { metadata, tool, handler };
