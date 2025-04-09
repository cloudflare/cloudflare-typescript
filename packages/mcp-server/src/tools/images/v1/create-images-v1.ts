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
  name: 'create_images_v1',
  description:
    'Upload an image with up to 10 Megabytes using a single HTTP POST (multipart/form-data) request.\nAn image can be uploaded by sending an image file or passing an accessible to an API url.\n',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      file: {
        type: 'object',
        description: 'An image binary data. Only needed when type is uploading a file.',
      },
      metadata: {
        type: 'object',
        description:
          'User modifiable key-value store. Can use used for keeping references to another system of record for managing images.',
      },
      requireSignedURLs: {
        type: 'boolean',
        description: 'Indicates whether the image requires a signature token for the access.',
      },
      url: {
        type: 'string',
        description: 'A URL to fetch an image from origin. Only needed when type is uploading from a URL.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.images.v1.create(body);
};

export default { metadata, tool, handler };
