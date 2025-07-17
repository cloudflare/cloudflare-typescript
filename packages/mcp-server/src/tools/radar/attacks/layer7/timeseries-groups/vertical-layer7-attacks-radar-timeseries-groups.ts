// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.attacks.layer7.timeseries_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/attacks/layer7/timeseries_groups/vertical',
  operationId: 'radar-get-attacks-layer7-timeseries-group-by-vertical',
};

export const tool: Tool = {
  name: 'vertical_layer7_attacks_radar_timeseries_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the distribution of layer 7 attacks by targeted vertical over time.",
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
      httpMethod: {
        type: 'array',
        description: 'Filters results by HTTP method.',
        items: {
          type: 'string',
          enum: [
            'GET',
            'POST',
            'DELETE',
            'PUT',
            'HEAD',
            'PURGE',
            'OPTIONS',
            'PROPFIND',
            'MKCOL',
            'PATCH',
            'ACL',
            'BCOPY',
            'BDELETE',
            'BMOVE',
            'BPROPFIND',
            'BPROPPATCH',
            'CHECKIN',
            'CHECKOUT',
            'CONNECT',
            'COPY',
            'LABEL',
            'LOCK',
            'MERGE',
            'MKACTIVITY',
            'MKWORKSPACE',
            'MOVE',
            'NOTIFY',
            'ORDERPATCH',
            'POLL',
            'PROPPATCH',
            'REPORT',
            'SEARCH',
            'SUBSCRIBE',
            'TRACE',
            'UNCHECKOUT',
            'UNLOCK',
            'UNSUBSCRIBE',
            'UPDATE',
            'VERSIONCONTROL',
            'BASELINECONTROL',
            'XMSENUMATTS',
            'RPC_OUT_DATA',
            'RPC_IN_DATA',
            'JSON',
            'COOK',
            'TRACK',
          ],
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
      mitigationProduct: {
        type: 'array',
        description: 'Filters the results by layer 7 mitigation product.',
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
          'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',
        enum: ['PERCENTAGE', 'MIN0_MAX'],
      },
    },
    required: [],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.radar.attacks.layer7.timeseriesGroups.vertical(body));
};

export default { metadata, tool, handler };
