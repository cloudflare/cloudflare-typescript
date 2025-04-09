// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.miscategorizations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_intel_miscategorizations',
  description: 'Allows you to submit requests to change a domain’s category.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      content_adds: {
        type: 'array',
        description: 'Content category IDs to add.',
        items: {
          type: 'integer',
        },
      },
      content_removes: {
        type: 'array',
        description: 'Content category IDs to remove.',
        items: {
          type: 'integer',
        },
      },
      indicator_type: {
        type: 'string',
        enum: ['domain', 'ipv4', 'ipv6', 'url'],
      },
      ip: {
        type: 'string',
        description: 'Provide only if indicator_type is `ipv4` or `ipv6`.',
      },
      security_adds: {
        type: 'array',
        description: 'Security category IDs to add.',
        items: {
          type: 'integer',
        },
      },
      security_removes: {
        type: 'array',
        description: 'Security category IDs to remove.',
        items: {
          type: 'integer',
        },
      },
      url: {
        type: 'string',
        description:
          'Provide only if indicator_type is `domain` or `url`. Example if indicator_type is `domain`: `example.com`. Example if indicator_type is `url`: `https://example.com/news/`.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.miscategorizations.create(body);
};

export default { metadata, tool, handler };
