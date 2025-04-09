// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.keys',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_stream_keys',
  description: 'Deletes signing keys and revokes all signed URLs generated with the key.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      identifier: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier, ...body } = args;
  return client.stream.keys.delete(identifier, body);
};

export default { metadata, tool, handler };
