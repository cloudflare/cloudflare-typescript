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
  name: 'edit_images_v1',
  description:
    'Update image access control. On access control change, all copies of the image are purged from cache.',
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
      metadata: {
        type: 'object',
        description:
          'User modifiable key-value store. Can be used for keeping references to another system of record for managing images. No change if not specified.',
      },
      requireSignedURLs: {
        type: 'boolean',
        description:
          'Indicates whether the image can be accessed using only its UID. If set to `true`, a signed token needs to be generated with a signing key to view the image. Returns a new UID on a change. No change if not specified.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { image_id, ...body } = args;
  return client.images.v1.edit(image_id, body);
};

export default { metadata, tool, handler };
