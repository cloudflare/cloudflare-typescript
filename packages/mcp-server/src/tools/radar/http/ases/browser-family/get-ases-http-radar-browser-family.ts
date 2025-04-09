// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.http.ases.browser_family',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_ases_http_radar_browser_family',
  description: 'Retrieves the top autonomous systems, by HTTP requests, of the requested browser family.',
  inputSchema: {
    type: 'object',
    properties: {
      browser_family: {
        type: 'string',
        description: 'Browser family.',
        enum: ['CHROME', 'EDGE', 'FIREFOX', 'SAFARI'],
      },
      asn: {
        type: 'array',
        description:
          'Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to exclude ASNs from results. For example, `-174, 3356` excludes results from AS174, but includes results from AS3356.',
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
      deviceType: {
        type: 'array',
        description: 'Filters results by device type.',
        items: {
          type: 'string',
          enum: ['DESKTOP', 'MOBILE', 'OTHER'],
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

export const handler = (client: Cloudflare, args: any) => {
  const { browser_family, ...body } = args;
  return client.radar.http.ases.browserFamily.get(browser_family, body);
};

export default { metadata, tool, handler };
