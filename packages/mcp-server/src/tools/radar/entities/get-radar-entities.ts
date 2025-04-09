// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.entities',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_radar_entities',
  description: 'Retrieves IP address information. ',
  inputSchema: {
    type: 'object',
    properties: {
      ip: {
        type: 'string',
        description: 'IP address.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.entities.get(body);
};

export default { metadata, tool, handler };
