// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.routes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bgp/routes/stats',
  operationId: 'radar-get-bgp-routes-stats',
};

export const tool: Tool = {
  name: 'stats_bgp_radar_routes',
  description: 'Retrieves the BGP routing table stats.',
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description:
          'Filters results by Autonomous System. Specify a single Autonomous System Number (ASN) as integer.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      location: {
        type: 'string',
        description: 'Filters results by location. Specify an alpha-2 location code.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.radar.bgp.routes.stats(body));
};

export default { metadata, tool, handler };
