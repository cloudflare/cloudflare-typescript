// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.attacks.layer7.top.ases',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'origin_top_layer7_attacks_radar_ases',
  description:
    'Retrieves the top origin autonomous systems of layer 7 attacks. Values are percentages of the total layer 7 attacks, with the origin autonomous systems determined by the client IP address.',
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
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      location: {
        type: 'array',
        description:
          'Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude locations from results. For example, `-US,PT` excludes results from the US, but includes results from PT.',
        items: {
          type: 'string',
        },
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
  return client.radar.attacks.layer7.top.ases.origin(body);
};

export default { metadata, tool, handler };
