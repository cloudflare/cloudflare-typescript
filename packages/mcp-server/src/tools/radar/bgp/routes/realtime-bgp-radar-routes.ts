// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.routes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'realtime_bgp_radar_routes',
  description:
    'Retrieves realtime routes for prefixes using public realtime data collectors (RouteViews and RIPE RIS).',
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      prefix: {
        type: 'string',
        description: 'Network prefix, IPv4 or IPv6.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.bgp.routes.realtime(body);
};

export default { metadata, tool, handler };
