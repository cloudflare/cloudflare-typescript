// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1.blobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/images/v1/{image_id}/blob',
  operationId: 'cloudflare-images-base-image',
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
    required: ['account_id', 'image_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { image_id, ...body } = args as any;
  return asBinaryContentResult(await client.images.v1.blobs.get(image_id, body));
};

export default { metadata, tool, handler };
