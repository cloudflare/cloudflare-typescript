// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'security_txt',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_security_txt',
  description: 'Update security.txt',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      acknowledgments: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      canonical: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      contact: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      enabled: {
        type: 'boolean',
      },
      encryption: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      expires: {
        type: 'string',
        format: 'date-time',
      },
      hiring: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      policy: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      preferredLanguages: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.securityTXT.update(body);
};

export default { metadata, tool, handler };
