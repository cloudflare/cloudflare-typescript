// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1.keys',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/images/v1/keys/{signing_key_name}',
  operationId: 'cloudflare-images-keys-add-signing-key',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { signing_key_name, ...body } = args as any;
  return client.images.v1.keys.update(signing_key_name, body);
};

export default { metadata, tool, handler };
