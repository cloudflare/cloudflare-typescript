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
  name: 'ases_bgp_radar_routes',
  description: 'Retrieves all ASes in the current global routing tables with routing statistics.',
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      location: {
        type: 'string',
        description: 'Location alpha-2 code.',
      },
      sortBy: {
        type: 'string',
        description: 'Sorts results by the specified field.',
        enum: ['cone', 'pfxs', 'ipv4', 'ipv6', 'rpki_valid', 'rpki_invalid', 'rpki_unknown'],
      },
      sortOrder: {
        type: 'string',
        description: 'Sort order.',
        enum: ['ASC', 'DESC'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.bgp.routes.ases(body);
};

export default { metadata, tool, handler };
