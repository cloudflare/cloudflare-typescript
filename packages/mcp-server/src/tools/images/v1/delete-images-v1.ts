// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/images/v1/{image_id}',
  operationId: 'cloudflare-images-delete-image',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { image_id, ...body } = args as any;
  return asTextContentResult(await client.images.v1.delete(image_id, body));
};

export default { metadata, tool, handler };
