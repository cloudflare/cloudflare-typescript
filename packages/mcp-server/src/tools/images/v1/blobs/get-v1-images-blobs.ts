// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1.blobs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_v1_images_blobs',
  description:
    'Fetch base image. For most images this will be the originally uploaded file. For larger images it can be a near-lossless version of the original.',
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
  return client.images.v1.blobs.get(image_id, body);
};

export default { metadata, tool, handler };
