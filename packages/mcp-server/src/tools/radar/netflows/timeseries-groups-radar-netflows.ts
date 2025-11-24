// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.netflows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/netflows/timeseries_groups/{dimension}',
  operationId: 'radar-get-netflows-timeseries-group',
};

export const tool: Tool = {
  name: 'timeseries_groups_radar_netflows',
  description:
    'Retrieves the distribution of NetFlows traffic, grouped by chosen the specified dimension over time.',
  inputSchema: {
    type: 'object',
    properties: {
      dimension: {
        type: 'string',
        description: 'Specifies the NetFlows attribute by which to group the results.',
        enum: ['ADM1', 'PRODUCT'],
      },
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
      geoId: {
        type: 'array',
        description:
          'Filters results by Geolocation. Specify a comma-separated list of GeoNames IDs. Prefix with `-` to exclude geoIds from results. For example, `-2267056,360689` excludes results from the 2267056 (Lisbon), but includes results from 5128638 (New York).',
        items: {
          type: 'string',
        },
      },
      limitPerGroup: {
        type: 'integer',
        description:
          'Limits the number of objects per group to the top items within the specified time range. When item count exceeds the limit, extra items appear grouped under an "other" category.',
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
      normalization: {
        type: 'string',
        description:
          'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',
        enum: ['PERCENTAGE', 'MIN0_MAX'],
      },
      product: {
        type: 'array',
        description: 'Filters the results by network traffic product types.',
        items: {
          type: 'string',
          enum: ['HTTP', 'ALL'],
        },
      },
    },
    required: ['dimension'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dimension, ...body } = args as any;
  return asTextContentResult(await client.radar.netflows.timeseriesGroups(dimension, body));
};

export default { metadata, tool, handler };
