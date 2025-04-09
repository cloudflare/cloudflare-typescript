// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1.variants',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v1_images_variants',
  description: 'Specify variants that allow you to resize images for different use cases.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      id: {
        type: 'string',
      },
      options: {
        type: 'object',
        description: 'Allows you to define image resizing sizes for different use cases.',
        properties: {
          fit: {
            type: 'string',
            description:
              'The fit property describes how the width and height dimensions should be interpreted.',
            enum: ['scale-down', 'contain', 'cover', 'crop', 'pad'],
          },
          height: {
            type: 'number',
            description: 'Maximum height in image pixels.',
          },
          metadata: {
            type: 'string',
            description: 'What EXIF data should be preserved in the output image.',
            enum: ['keep', 'copyright', 'none'],
          },
          width: {
            type: 'number',
            description: 'Maximum width in image pixels.',
          },
        },
        required: ['fit', 'height', 'metadata', 'width'],
      },
      neverRequireSignedURLs: {
        type: 'boolean',
        description:
          'Indicates whether the variant can access an image without a signature, regardless of image access control.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.images.v1.variants.create(body);
};

export default { metadata, tool, handler };
