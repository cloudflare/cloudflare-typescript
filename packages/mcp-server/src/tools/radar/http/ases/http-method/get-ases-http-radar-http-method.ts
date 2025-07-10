// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.http.ases.http_method',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/http/top/ases/http_version/{http_version}',
  operationId: 'radar-get-http-top-ases-by-http-version',
};

export const tool: Tool = {
  name: 'get_ases_http_radar_http_method',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the top autonomous systems, by HTTP requests, of the requested HTTP version.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        meta: {\n          type: 'object',\n          description: 'Metadata for the results.',\n          properties: {\n            confidenceInfo: {\n              type: 'object',\n              properties: {\n                annotations: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    description: 'Annotation associated with the result (e.g. outage or other type of event).',\n                    properties: {\n                      dataSource: {\n                        type: 'string'\n                      },\n                      description: {\n                        type: 'string'\n                      },\n                      endDate: {\n                        type: 'string',\n                        format: 'date-time'\n                      },\n                      eventType: {\n                        type: 'string'\n                      },\n                      isInstantaneous: {\n                        type: 'boolean',\n                        description: 'Whether event is a single point in time or a time range.'\n                      },\n                      linkedUrl: {\n                        type: 'string'\n                      },\n                      startDate: {\n                        type: 'string',\n                        format: 'date-time'\n                      }\n                    },\n                    required: [                      'dataSource',\n                      'description',\n                      'endDate',\n                      'eventType',\n                      'isInstantaneous',\n                      'linkedUrl',\n                      'startDate'\n                    ]\n                  }\n                },\n                level: {\n                  type: 'integer',\n                  description: 'Provides an indication of how much confidence Cloudflare has in the data.'\n                }\n              },\n              required: [                'annotations',\n                'level'\n              ]\n            },\n            dateRange: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  endTime: {\n                    type: 'string',\n                    description: 'Adjusted end of date range.',\n                    format: 'date-time'\n                  },\n                  startTime: {\n                    type: 'string',\n                    description: 'Adjusted start of date range.',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'endTime',\n                  'startTime'\n                ]\n              }\n            },\n            lastUpdated: {\n              type: 'string',\n              description: 'Timestamp of the last dataset update.',\n              format: 'date-time'\n            },\n            normalization: {\n              type: 'string',\n              description: 'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',\n              enum: [                'PERCENTAGE',\n                'MIN0_MAX',\n                'MIN_MAX',\n                'RAW_VALUES',\n                'PERCENTAGE_CHANGE',\n                'ROLLING_AVERAGE',\n                'OVERLAPPED_PERCENTAGE',\n                'RATIO'\n              ]\n            },\n            units: {\n              type: 'array',\n              description: 'Measurement units for the results.',\n              items: {\n                type: 'object',\n                properties: {\n                  name: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'name',\n                  'value'\n                ]\n              }\n            }\n          },\n          required: [            'confidenceInfo',\n            'dateRange',\n            'lastUpdated',\n            'normalization',\n            'units'\n          ]\n        },\n        top_0: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              clientASN: {\n                type: 'integer'\n              },\n              clientASName: {\n                type: 'string'\n              },\n              value: {\n                type: 'string',\n                description: 'A numeric string.'\n              }\n            },\n            required: [              'clientASN',\n              'clientASName',\n              'value'\n            ]\n          }\n        }\n      },\n      required: [        'meta',\n        'top_0'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      http_version: {
        type: 'string',
        description: 'HTTP version.',
        enum: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { http_version, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.radar.http.ases.httpMethod.get(http_version, body)),
  );
};

export default { metadata, tool, handler };
