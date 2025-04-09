// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ranking.domain',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_ranking_radar_domain',
  description:
    'Retrieves domain rank details. Cloudflare provides an ordered rank for the top 100 domains, but for the remainder it only provides ranking buckets like top 200 thousand, top one million, etc.. These are available through Radar datasets endpoints.',
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description: 'Domain name.',
      },
      date: {
        type: 'array',
        description: 'Array of dates to filter the results.',
        items: {
          type: 'string',
          format: 'date',
        },
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      includeTopLocations: {
        type: 'boolean',
        description: 'Includes top locations in the response.',
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      name: {
        type: 'array',
        description: 'Array of names used to label the series in the response.',
        items: {
          type: 'string',
        },
      },
      rankingType: {
        type: 'string',
        description: 'Ranking type.',
        enum: ['POPULAR', 'TRENDING_RISE', 'TRENDING_STEADY'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { domain, ...body } = args;
  return client.radar.ranking.domain.get(domain, body);
};

export default { metadata, tool, handler };
