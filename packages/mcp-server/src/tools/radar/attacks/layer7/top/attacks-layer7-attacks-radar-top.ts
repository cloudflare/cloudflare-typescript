// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.attacks.layer7.top',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'attacks_layer7_attacks_radar_top',
  description:
    'Retrieves the top attacks from origin to target location. Values are percentages of the total layer 7 attacks (with billing country). The attack magnitude can be defined by the number of mitigated requests or by the number of zones affected. You can optionally limit the number of attacks by origin/target location (useful if all the top attacks are from or to the same location).',
  inputSchema: {
    type: 'object',
    properties: {
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
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      limitDirection: {
        type: 'string',
        description:
          'Array of attack origin/target location attack limits. Together with `limitPerLocation`, limits how many objects will be fetched per origin/target location.',
        enum: ['ORIGIN', 'TARGET'],
      },
      limitPerLocation: {
        type: 'integer',
        description:
          'Limits the number of attacks per origin/target (refer to `limitDirection` parameter) location.',
      },
      location: {
        type: 'array',
        description:
          'Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude locations from results. For example, `-US,PT` excludes results from the US, but includes results from PT.',
        items: {
          type: 'string',
        },
      },
      magnitude: {
        type: 'string',
        description:
          'This parameter is deprecated. In the future, we will only support attack magnitude defined by the total number of mitigated requests (MITIGATED_REQUESTS).',
        enum: ['AFFECTED_ZONES', 'MITIGATED_REQUESTS'],
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
      normalization: {
        type: 'string',
        description:
          'Normalization method applied. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',
        enum: ['PERCENTAGE', 'MIN_MAX'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.attacks.layer7.top.attacks(body);
};

export default { metadata, tool, handler };
