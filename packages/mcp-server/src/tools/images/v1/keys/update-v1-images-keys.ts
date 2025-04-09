// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1.keys',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v1_images_keys',
  description: 'Create a new signing key with specified name. Returns all keys available.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      signing_key_name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { signing_key_name, ...body } = args;
  return client.images.v1.keys.update(signing_key_name, body);
};

export default { metadata, tool, handler };
