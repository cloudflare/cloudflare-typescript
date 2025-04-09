// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.verification',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_ssl_verification',
  description: 'Get SSL Verification Info for a Zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      retry: {
        type: 'string',
        description: 'Immediately retry SSL Verification.',
        enum: [true],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.ssl.verification.get(body);
};

export default { metadata, tool, handler };
