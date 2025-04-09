// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.attacks.layer7.top.locations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'target_top_layer7_attacks_radar_locations',
  description:
    "Retrieves the top target locations of and by layer 7 attacks. Values are a percentage out of the total layer 7 attacks. The target location is determined by the attacked zone's billing country, when available.",
  inputSchema: {
    type: 'object',
    properties: {
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
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      mitigationProduct: {
        type: 'array',
        description: 'Array of L7 mitigation products.',
        items: {
          type: 'string',
          enum: [
            'DDOS',
            'WAF',
            'BOT_MANAGEMENT',
            'ACCESS_RULES',
            'IP_REPUTATION',
            'API_SHIELD',
            'DATA_LOSS_PREVENTION',
          ],
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
  return client.radar.attacks.layer7.top.locations.target(body);
};

export default { metadata, tool, handler };
