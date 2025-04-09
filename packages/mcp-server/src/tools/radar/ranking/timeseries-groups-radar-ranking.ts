// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ranking',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'timeseries_groups_radar_ranking',
  description: 'Retrieves domains rank over time.',
  inputSchema: {
    type: 'object',
    properties: {
      dateEnd: {
        type: 'array',
        description: 'End of the date range (inclusive).',
        items: {
          type: 'string',
          format: 'date-time',
        },
      },
      dateRange: {
        type: 'array',
        description:
          'Filters results by the specified date range. For example, use `7d` and `7dcontrol` to compare this week with the previous week. Use this parameter or set specific start and end dates (`dateStart` and `dateEnd` parameters).',
        items: {
          type: 'string',
        },
      },
      dateStart: {
        type: 'array',
        description: 'Start of the date range.',
        items: {
          type: 'string',
          format: 'date-time',
        },
      },
      domainCategory: {
        type: 'array',
        description: 'Filters results by domain category.',
        items: {
          type: 'string',
        },
      },
      domains: {
        type: 'array',
        description: 'Comma-separated list of domain names.',
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
        description: 'Comma-separated list of locations (alpha-2 codes).',
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
        description: 'Ranking type.',
        enum: ['POPULAR', 'TRENDING_RISE', 'TRENDING_STEADY'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.ranking.timeseriesGroups(body);
};

export default { metadata, tool, handler };
