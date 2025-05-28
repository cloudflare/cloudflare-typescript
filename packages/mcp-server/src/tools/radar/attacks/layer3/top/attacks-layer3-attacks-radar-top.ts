// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.attacks.layer3.top',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/attacks/layer3/top/attacks',
  operationId: 'radar-get-attacks-layer3-top-attacks',
};

export const tool: Tool = {
  name: 'attacks_layer3_attacks_radar_top',
  description:
    'Retrieves the top layer 3 attacks from origin to target location. Values are a percentage out of the total layer 3 attacks (with billing country). You can optionally limit the number of attacks by origin/target location (useful if all the top attacks are from or to the same location).',
  inputSchema: {
    type: 'object',
    properties: {
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
      ipVersion: {
        type: 'array',
        description: 'Filters results by IP version (Ipv4 vs. IPv6).',
        items: {
          type: 'string',
          enum: ['IPv4', 'IPv6'],
        },
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      limitDirection: {
        type: 'string',
        description: 'Specifies whether the `limitPerLocation` applies to the source or target location.',
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
          'Filters results by location. Specify a comma-separated list of alpha-2 codes. Prefix with `-` to exclude locations from results. For example, `-US,PT` excludes results from the US, but includes results from PT.',
        items: {
          type: 'string',
        },
      },
      magnitude: {
        type: 'string',
        description:
          'Orders results based on attack magnitude, defined by total mitigated bytes or total mitigated attacks.',
        enum: ['MITIGATED_BYTES', 'MITIGATED_ATTACKS'],
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
          'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',
        enum: ['PERCENTAGE', 'MIN_MAX'],
      },
      protocol: {
        type: 'array',
        description: 'Filters the results by layer 3/4 protocol.',
        items: {
          type: 'string',
          enum: ['UDP', 'TCP', 'ICMP', 'GRE'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.radar.attacks.layer3.top.attacks(body);
};

export default { metadata, tool, handler };
