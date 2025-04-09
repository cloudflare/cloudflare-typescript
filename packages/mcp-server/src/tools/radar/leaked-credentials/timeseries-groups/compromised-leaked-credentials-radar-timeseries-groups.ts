// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.leaked_credentials.timeseries_groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'compromised_leaked_credentials_radar_timeseries_groups',
  description:
    'Retrieves the distribution of HTTP authentication requests by compromised credential status over time.',
  inputSchema: {
    type: 'object',
    properties: {
      aggInterval: {
        type: 'string',
        description:
          'Aggregation interval results should be returned in (for example, in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).',
        enum: ['15m', '1h', '1d', '1w'],
      },
      botClass: {
        type: 'array',
        description:
          'Filters results by bot class. Refer to [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).',
        items: {
          type: 'string',
          enum: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
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
  return client.radar.leakedCredentials.timeseriesGroups.compromised(body);
};

export default { metadata, tool, handler };
