// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.top.ases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bgp/top/ases',
  operationId: 'radar-get-bgp-top-ases',
};

export const tool: Tool = {
  name: 'get_top_bgp_radar_ases',
  description: 'Retrieves the top autonomous systems by BGP updates (announcements only).',
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'array',
        description:
          'Filters results by Autonomous System. Specify one or more Autonomous System Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from results. For example, `-174, 3356` excludes results from AS174, but includes results from AS3356.',
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
      prefix: {
        type: 'array',
        description: 'Filters results by BGP network prefix.',
        items: {
          type: 'string',
          description: 'Network prefix, IPv4 or IPv6.',
        },
      },
      updateType: {
        type: 'array',
        description: 'Filters results by BGP update type.',
        items: {
          type: 'string',
          enum: ['ANNOUNCEMENT', 'WITHDRAWAL'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.radar.bgp.top.ases.get(body);
};

export default { metadata, tool, handler };
