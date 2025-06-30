// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bots/timeseries',
  operationId: 'radar-get-bots-timeseries',
};

export const tool: Tool = {
  name: 'timeseries_radar_bots',
  description: 'Retrieves bots HTTP request volume over time.',
  inputSchema: {
    type: 'object',
    properties: {
      aggInterval: {
        type: 'string',
        description:
          'Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).',
        enum: ['15m', '1h', '1d', '1w'],
      },
      asn: {
        type: 'array',
        description:
          'Filters results by Autonomous System. Specify one or more Autonomous System Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from results. For example, `-174, 3356` excludes results from AS174, but includes results from AS3356.',
        items: {
          type: 'string',
        },
      },
      bot: {
        type: 'array',
        description: 'Filters results by bot name.',
        items: {
          type: 'string',
        },
      },
      botCategory: {
        type: 'array',
        description: 'Filters results by bot category.',
        items: {
          type: 'string',
          description: 'The category of the bot.',
          enum: [
            'SEARCH_ENGINE_CRAWLER',
            'SEARCH_ENGINE_OPTIMIZATION',
            'MONITORING_AND_ANALYTICS',
            'ADVERTISING_AND_MARKETING',
            'SOCIAL_MEDIA_MARKETING',
            'PAGE_PREVIEW',
            'ACADEMIC_RESEARCH',
            'SECURITY',
            'ACCESSIBILITY',
            'WEBHOOKS',
            'FEED_FETCHER',
            'AI_CRAWLER',
            'AGGREGATOR',
            'AI_ASSISTANT',
            'AI_SEARCH',
            'ARCHIVER',
          ],
        },
      },
      botOperator: {
        type: 'array',
        description: 'Filters results by bot operator.',
        items: {
          type: 'string',
        },
      },
      botVerificationStatus: {
        type: 'array',
        description: 'Filters results by bot verification status (Verified vs. Unverified).',
        items: {
          type: 'string',
          description: 'The category of the bot.',
          enum: ['VERIFIED'],
        },
      },
      continent: {
        type: 'array',
        description:
          'Filters results by continent. Specify a comma-separated list of alpha-2 codes. Prefix with `-` to exclude continents from results. For example, `-EU,NA` excludes results from EU, but includes results from NA.',
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
          'Filters results by date range. For example, use `7d` and `7dcontrol` to compare this week with the previous week. Use this parameter or set specific start and end dates (`dateStart` and `dateEnd` parameters).',
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
      location: {
        type: 'array',
        description:
          'Filters results by location. Specify a comma-separated list of alpha-2 codes. Prefix with `-` to exclude locations from results. For example, `-US,PT` excludes results from the US, but includes results from PT.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.radar.bots.timeseries(body));
};

export default { metadata, tool, handler };
