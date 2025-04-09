// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_images_v1',
  description: 'Fetch details for a single image.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      image_id: {
        type: 'string',
        description: 'Image unique identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { image_id, ...body } = args;
  return client.images.v1.get(image_id, body);
};

export default { metadata, tool, handler };
