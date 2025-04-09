// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v2',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_images_v2',
  description:
    'List up to 10000 images with one request. Use the optional parameters below to get a specific range of images.\nEndpoint returns continuation_token if more images are present.\n',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      continuation_token: {
        type: 'string',
        description: 'Continuation token for a next page. List images V2 returns continuation_token',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page.',
      },
      sort_order: {
        type: 'string',
        description: 'Sorting order by upload time.',
        enum: ['asc', 'desc'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.images.v2.list(body);
};

export default { metadata, tool, handler };
