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
  name: 'create_stream_keys',
  description:
    'Creates an RSA private key in PEM and JWK formats. Key files are only displayed once after creation. Keys are created, used, and deleted independently of videos, and every key can sign any video.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.keys.create(body);
};

export default { metadata, tool, handler };
