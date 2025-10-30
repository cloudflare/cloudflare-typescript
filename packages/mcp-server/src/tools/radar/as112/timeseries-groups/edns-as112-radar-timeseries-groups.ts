// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.as112.timeseries_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/as112/timeseries_groups/edns',
  operationId: 'radar-get-dns-as112-timeseries-group-by-edns',
};

export const tool: Tool = {
  name: 'edns_as112_radar_timeseries_groups',
  description:
    'Retrieves the distribution of AS112 DNS queries by EDNS (Extension Mechanisms for DNS) support over time.',
  inputSchema: {
    type: 'object',
    properties: {
      aggInterval: {
        type: 'string',
        description:
          'Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).',
        enum: ['15m', '1h', '1d', '1w'],
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
      protocol: {
        type: 'array',
        description: 'Filters results by DNS transport protocol.',
        items: {
          type: 'string',
          enum: ['UDP', 'TCP', 'HTTPS', 'TLS'],
        },
      },
      queryType: {
        type: 'array',
        description: 'Filters results by DNS query type.',
        items: {
          type: 'string',
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
      responseCode: {
        type: 'array',
        description: 'Filters results by DNS response code.',
        items: {
          type: 'string',
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
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.radar.as112.timeseriesGroups.edns(body));
};

export default { metadata, tool, handler };
