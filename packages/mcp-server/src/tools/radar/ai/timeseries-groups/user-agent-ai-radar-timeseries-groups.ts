// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ai.timeseries_groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'user_agent_ai_radar_timeseries_groups',
  description: 'Retrieves the distribution of traffic by AI user agent over time.',
  inputSchema: {
    type: 'object',
    properties: {
      aggInterval: {
        type: 'string',
        description:
          'Aggregation interval results should be returned in (for example, in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).',
        enum: ['15m', '1h', '1d', '1w'],
      },
      asn: {
        type: 'array',
        description:
          'Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to exclude ASNs from results. For example, `-174, 3356` excludes results from AS174, but includes results from AS3356.',
        items: {
          type: 'string',
        },
      },
      continent: {
        type: 'array',
        description:
          'Comma-separated list of continents (alpha-2 continent codes). Prefix with `-` to exclude continents from results. For example, `-EU,NA` excludes results from EU, but includes results from NA.',
        items: {
          type: 'string',
        },
      },
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
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      limitPerGroup: {
        type: 'integer',
        description:
          'Limits the number of objects per group to the top items within the specified time range. If there are more items than the limit, the response will include the count of items, with any remaining items grouped together under an "other" category.',
      },
      location: {
        type: 'array',
        description:
          'Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude locations from results. For example, `-US,PT` excludes results from the US, but includes results from PT.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.ai.timeseriesGroups.userAgent(body);
};

export default { metadata, tool, handler };
