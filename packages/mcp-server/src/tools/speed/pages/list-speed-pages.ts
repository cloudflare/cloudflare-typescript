// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'speed.pages',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_speed_pages',
  description: 'Lists all webpages which have been tested.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.speed.pages.list(body);
};

export default { metadata, tool, handler };
