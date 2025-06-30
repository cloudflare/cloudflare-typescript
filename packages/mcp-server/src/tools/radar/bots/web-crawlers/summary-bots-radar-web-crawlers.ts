// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bots.web_crawlers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bots/crawlers/summary/{dimension}',
  operationId: 'radar-get-crawlers-summary',
};

export const tool: Tool = {
  name: 'summary_bots_radar_web_crawlers',
  description:
    'Retrieves an aggregated summary of HTTP requests from crawlers, grouped by the specified dimension.',
  inputSchema: {
    type: 'object',
    properties: {
      dimension: {
        type: 'string',
        description: 'Specifies the attribute by which to group the results.',
        enum: ['USER_AGENT', 'REFERER', 'CRAWL_REFER_RATIO'],
      },
      botOperator: {
        type: 'array',
        description: 'Filters results by bot operator.',
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
      limitPerGroup: {
        type: 'integer',
        description:
          'Limits the number of objects per group to the top items within the specified time range. When item count exceeds the limit, extra items appear grouped under an "other" category.',
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
  const { dimension, ...body } = args as any;
  return asTextContentResult(await client.radar.bots.webCrawlers.summary(dimension, body));
};

export default { metadata, tool, handler };
