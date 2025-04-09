// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ranking.internet_services',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'categories_ranking_radar_internet_services',
  description: 'Retrieves the list of Internet services categories.',
  inputSchema: {
    type: 'object',
    properties: {
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.ranking.internetServices.categories(body);
};

export default { metadata, tool, handler };
