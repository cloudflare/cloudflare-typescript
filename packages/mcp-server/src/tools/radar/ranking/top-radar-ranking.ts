// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ranking',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/ranking/top',
  operationId: 'radar-get-ranking-top-domains',
};

export const tool: Tool = {
  name: 'top_radar_ranking',
  description:
    'Retrieves the top or trending domains based on their rank. Popular domains are domains of broad appeal based on how people use the Internet. Trending domains are domains that are generating a surge in interest. For more information on top domains, see https://blog.cloudflare.com/radar-domain-rankings/.',
  inputSchema: {
    type: 'object',
    properties: {
      date: {
        type: 'array',
        description: 'Filters results by the specified array of dates.',
        items: {
          type: 'string',
          format: 'date',
        },
      },
      domainCategory: {
        type: 'array',
        description: 'Filters results by domain category.',
        items: {
          type: 'string',
        },
      },
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
        type: 'array',
        description: 'Filters results by location. Specify a comma-separated list of alpha-2 location codes.',
        items: {
          type: 'string',
        },
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
        description: 'The ranking type.',
        enum: ['POPULAR', 'TRENDING_RISE', 'TRENDING_STEADY'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.radar.ranking.top(body);
};

export default { metadata, tool, handler };
