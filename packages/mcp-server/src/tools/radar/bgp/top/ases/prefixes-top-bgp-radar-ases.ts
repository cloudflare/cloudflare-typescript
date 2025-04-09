// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.top.ases',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'prefixes_top_bgp_radar_ases',
  description:
    'Retrieves the full list of autonomous systems on the global routing table ordered by announced prefixes count. The data comes from public BGP MRT data archives and updates every 2 hours.',
  inputSchema: {
    type: 'object',
    properties: {
      country: {
        type: 'string',
        description: 'Alpha-2 country code.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of ASes to return.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.bgp.top.ases.prefixes(body);
};

export default { metadata, tool, handler };
