// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1.keys',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v1_images_keys',
  description: 'Lists your signing keys. These can be found on your Cloudflare Images dashboard.',
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
  return client.images.v1.keys.list(body);
};

export default { metadata, tool, handler };
