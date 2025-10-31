// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.dns.top',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/dns/top/ases',
  operationId: 'radar-get-dns-top-ases',
};

export const tool: Tool = {
  name: 'ases_dns_radar_top',
  description: 'Retrieves the top autonomous systems by DNS queries made to 1.1.1.1 DNS resolver.',
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
      cacheHit: {
        type: 'array',
        description: 'Filters results based on cache status.',
        items: {
          type: 'boolean',
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
      dnssec: {
        type: 'array',
        description: 'Filters results based on DNSSEC (DNS Security Extensions) support.',
        items: {
          type: 'string',
          enum: ['INVALID', 'INSECURE', 'SECURE', 'OTHER'],
        },
      },
      dnssecAware: {
        type: 'array',
        description: 'Filters results based on DNSSEC (DNS Security Extensions) client awareness.',
        items: {
          type: 'string',
          enum: ['SUPPORTED', 'NOT_SUPPORTED'],
        },
      },
      dnssecE2e: {
        type: 'array',
        description: 'Filters results based on DNSSEC-validated answers by end-to-end security status.',
        items: {
          type: 'boolean',
        },
      },
      domain: {
        type: 'array',
        description: 'Filters results by domain name.',
        items: {
          type: 'string',
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
      location: {
        type: 'array',
        description:
          'Filters results by location. Specify a comma-separated list of alpha-2 codes. Prefix with `-` to exclude locations from results. For example, `-US,PT` excludes results from the US, but includes results from PT.',
        items: {
          type: 'string',
        },
      },
      matchingAnswer: {
        type: 'array',
        description: 'Filters results based on whether the queries have a matching answer.',
        items: {
          type: 'boolean',
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
        type: 'array',
        description: 'Specifies whether the response includes empty DNS responses (NODATA).',
        items: {
          type: 'boolean',
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
      responseTtl: {
        type: 'array',
        description: 'Filters results by DNS response TTL.',
        items: {
          type: 'string',
          enum: [
            'LTE_1M',
            'GT_1M_LTE_5M',
            'GT_5M_LTE_15M',
            'GT_15M_LTE_1H',
            'GT_1H_LTE_1D',
            'GT_1D_LTE_1W',
            'GT_1W',
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
  return asTextContentResult(await client.radar.dns.top.ases(body));
};

export default { metadata, tool, handler };
