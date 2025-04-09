// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'speed.availabilities',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_speed_availabilities',
  description: 'Retrieves quota for all plans, as well as the current zone quota.',
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
  return client.speed.availabilities.list(body);
};

export default { metadata, tool, handler };
