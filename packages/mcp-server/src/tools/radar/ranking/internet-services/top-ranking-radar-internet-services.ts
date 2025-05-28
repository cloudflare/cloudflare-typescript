// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ranking.internet_services',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/ranking/internet_services/top',
  operationId: 'radar-get-ranking-top-internet-services',
};

export const tool: Tool = {
  name: 'top_ranking_radar_internet_services',
  description: 'Retrieves top Internet services based on their rank.',
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
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
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
      serviceCategory: {
        type: 'array',
        description: 'Filters results by Internet service category.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.radar.ranking.internetServices.top(body);
};

export default { metadata, tool, handler };
