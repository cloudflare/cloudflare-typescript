// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_images_v1',
  description:
    'Delete an image on Cloudflare Images. On success, all copies of the image are deleted and purged from cache.',
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
  return client.images.v1.delete(image_id, body);
};

export default { metadata, tool, handler };
