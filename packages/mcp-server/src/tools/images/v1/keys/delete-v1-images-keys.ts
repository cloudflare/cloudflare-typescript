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
  name: 'delete_v1_images_keys',
  description:
    'Delete signing key with specified name. Returns all keys available.\nWhen last key is removed, a new default signing key will be generated.\n',
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
  return client.images.v1.keys.delete(signing_key_name, body);
};

export default { metadata, tool, handler };
