// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.http.timeseries_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/http/timeseries_groups/device_type',
  operationId: 'radar-get-http-timeseries-group-by-device-type',
};

export const tool: Tool = {
  name: 'device_type_http_radar_timeseries_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the distribution of HTTP requests by device type over time.",
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
      botClass: {
        type: 'array',
        description:
          'Filters results by bot class. Refer to [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).',
        items: {
          type: 'string',
          enum: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
        },
      },
      browserFamily: {
        type: 'array',
        description: 'Filters results by browser family.',
        items: {
          type: 'string',
          enum: ['CHROME', 'EDGE', 'FIREFOX', 'SAFARI'],
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
      httpProtocol: {
        type: 'array',
        description: 'Filters results by HTTP protocol (HTTP vs. HTTPS).',
        items: {
          type: 'string',
          enum: ['HTTP', 'HTTPS'],
        },
      },
      httpVersion: {
        type: 'array',
        description: 'Filters results by HTTP version.',
        items: {
          type: 'string',
          enum: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
        },
      },
      ipVersion: {
        type: 'array',
        description: 'Filters results by IP version (Ipv4 vs. IPv6).',
        items: {
          type: 'string',
          enum: ['IPv4', 'IPv6'],
        },
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
      os: {
        type: 'array',
        description: 'Filters results by operating system.',
        items: {
          type: 'string',
          enum: ['WINDOWS', 'MACOSX', 'IOS', 'ANDROID', 'CHROMEOS', 'LINUX', 'SMART_TV'],
        },
      },
      tlsVersion: {
        type: 'array',
        description: 'Filters results by TLS version.',
        items: {
          type: 'string',
          enum: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2', 'TLSv1_3', 'TLSvQUIC'],
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.radar.http.timeseriesGroups.deviceType(body));
};

export default { metadata, tool, handler };
