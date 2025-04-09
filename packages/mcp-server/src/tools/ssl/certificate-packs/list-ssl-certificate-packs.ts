// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.certificate_packs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_ssl_certificate_packs',
  description: 'For a given zone, list all active certificate packs.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      status: {
        type: 'string',
        description: 'Include Certificate Packs of all statuses, not just active ones.',
        enum: ['all'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.ssl.certificatePacks.list(body);
};

export default { metadata, tool, handler };
