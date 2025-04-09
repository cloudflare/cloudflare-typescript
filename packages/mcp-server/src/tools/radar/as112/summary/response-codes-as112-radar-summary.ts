// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.as112.summary',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'response_codes_as112_radar_summary',
  description: 'Retrieves the distribution of AS112 DNS requests classified by response code.',
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
      limitPerGroup: {
        type: 'integer',
        description:
          'Limits the number of objects per group to the top items within the specified time range. If there are more items than the limit, the response will include the count of items, with any remaining items grouped together under an "other" category.',
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
      protocol: {
        type: 'string',
        description: 'Filters results by DNS transport protocol.',
        enum: ['UDP', 'TCP', 'HTTPS', 'TLS'],
      },
      queryType: {
        type: 'string',
        description: 'Filters results by DNS query type.',
        enum: [
          'A',
          'AAAA',
          'A6',
          'AFSDB',
          'ANY',
          'APL',
          'ATMA',
          'AXFR',
          'CAA',
          'CDNSKEY',
          'CDS',
          'CERT',
          'CNAME',
          'CSYNC',
          'DHCID',
          'DLV',
          'DNAME',
          'DNSKEY',
          'DOA',
          'DS',
          'EID',
          'EUI48',
          'EUI64',
          'GPOS',
          'GID',
          'HINFO',
          'HIP',
          'HTTPS',
          'IPSECKEY',
          'ISDN',
          'IXFR',
          'KEY',
          'KX',
          'L32',
          'L64',
          'LOC',
          'LP',
          'MAILA',
          'MAILB',
          'MB',
          'MD',
          'MF',
          'MG',
          'MINFO',
          'MR',
          'MX',
          'NAPTR',
          'NB',
          'NBSTAT',
          'NID',
          'NIMLOC',
          'NINFO',
          'NS',
          'NSAP',
          'NSEC',
          'NSEC3',
          'NSEC3PARAM',
          'NULL',
          'NXT',
          'OPENPGPKEY',
          'OPT',
          'PTR',
          'PX',
          'RKEY',
          'RP',
          'RRSIG',
          'RT',
          'SIG',
          'SINK',
          'SMIMEA',
          'SOA',
          'SPF',
          'SRV',
          'SSHFP',
          'SVCB',
          'TA',
          'TALINK',
          'TKEY',
          'TLSA',
          'TSIG',
          'TXT',
          'UINFO',
          'UID',
          'UNSPEC',
          'URI',
          'WKS',
          'X25',
          'ZONEMD',
        ],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.as112.summary.responseCodes(body);
};

export default { metadata, tool, handler };
