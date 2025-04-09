// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.search',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'global_radar_search',
  description: 'Searches for locations, autonomous systems, and reports.',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Search for locations, autonomous systems and reports.',
      },
      exclude: {
        type: 'array',
        description: 'Search types to be excluded from results.',
        items: {
          type: 'string',
          enum: ['SPECIAL_EVENTS', 'NOTEBOOKS', 'LOCATIONS', 'ASNS'],
        },
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      include: {
        type: 'array',
        description: 'Search types to be included in results.',
        items: {
          type: 'string',
          enum: ['SPECIAL_EVENTS', 'NOTEBOOKS', 'LOCATIONS', 'ASNS'],
        },
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      limitPerGroup: {
        type: 'number',
        description: 'Limit the number of objects per search category.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.search.global(body);
};

export default { metadata, tool, handler };
