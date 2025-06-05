// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.dns.timeseries_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/dns/timeseries_groups/query_type',
  operationId: 'radar-get-dns-timeseries-group-by-query-type',
};

export const tool: Tool = {
  name: 'query_type_dns_radar_timeseries_groups',
  description: 'Retrieves the distribution of DNS queries by type over time.',
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
      nodata: {
        type: 'boolean',
        description: 'Specifies whether the response includes empty DNS responses (NODATA).',
      },
      protocol: {
        type: 'string',
        description: 'Filters results by DNS transport protocol.',
        enum: ['UDP', 'TCP', 'HTTPS', 'TLS'],
      },
      responseCode: {
        type: 'string',
        description: 'Filters results by DNS response code.',
        enum: [
          'NOERROR',
          'FORMERR',
          'SERVFAIL',
          'NXDOMAIN',
          'NOTIMP',
          'REFUSED',
          'YXDOMAIN',
          'YXRRSET',
          'NXRRSET',
          'NOTAUTH',
          'NOTZONE',
          'BADSIG',
          'BADKEY',
          'BADTIME',
          'BADMODE',
          'BADNAME',
          'BADALG',
          'BADTRUNC',
          'BADCOOKIE',
        ],
      },
      tld: {
        type: 'array',
        description: 'Filters results by country code top-level domain (ccTLD).',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.radar.dns.timeseriesGroups.queryType(body));
};

export default { metadata, tool, handler };
