// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz.export',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zaraz_export',
  description: 'Exports full current published Zaraz configuration for a zone, secret variables included.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zaraz.export.get(body);
};

export default { metadata, tool, handler };
