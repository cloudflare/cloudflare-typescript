// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ct',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/ct/timeseries',
  operationId: 'radar-get-ct-timeseries',
};

export const tool: Tool = {
  name: 'timeseries_radar_ct',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves certificate volume over time.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ct_timeseries_response',\n  $defs: {\n    ct_timeseries_response: {\n      type: 'object',\n      properties: {\n        meta: {\n          type: 'object',\n          description: 'Metadata for the results.',\n          properties: {\n            aggInterval: {\n              type: 'string',\n              description: 'Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).',\n              enum: [                'FIFTEEN_MINUTES',\n                'ONE_HOUR',\n                'ONE_DAY',\n                'ONE_WEEK',\n                'ONE_MONTH'\n              ]\n            },\n            confidenceInfo: {\n              type: 'object',\n              properties: {\n                annotations: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    description: 'Annotation associated with the result (e.g. outage or other type of event).',\n                    properties: {\n                      dataSource: {\n                        type: 'string'\n                      },\n                      description: {\n                        type: 'string'\n                      },\n                      endDate: {\n                        type: 'string',\n                        format: 'date-time'\n                      },\n                      eventType: {\n                        type: 'string'\n                      },\n                      isInstantaneous: {\n                        type: 'boolean',\n                        description: 'Whether event is a single point in time or a time range.'\n                      },\n                      linkedUrl: {\n                        type: 'string'\n                      },\n                      startDate: {\n                        type: 'string',\n                        format: 'date-time'\n                      }\n                    },\n                    required: [                      'dataSource',\n                      'description',\n                      'endDate',\n                      'eventType',\n                      'isInstantaneous',\n                      'linkedUrl',\n                      'startDate'\n                    ]\n                  }\n                },\n                level: {\n                  type: 'integer',\n                  description: 'Provides an indication of how much confidence Cloudflare has in the data.'\n                }\n              },\n              required: [                'annotations',\n                'level'\n              ]\n            },\n            dateRange: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  endTime: {\n                    type: 'string',\n                    description: 'Adjusted end of date range.',\n                    format: 'date-time'\n                  },\n                  startTime: {\n                    type: 'string',\n                    description: 'Adjusted start of date range.',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'endTime',\n                  'startTime'\n                ]\n              }\n            },\n            lastUpdated: {\n              type: 'string',\n              description: 'Timestamp of the last dataset update.',\n              format: 'date-time'\n            },\n            normalization: {\n              type: 'string',\n              description: 'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',\n              enum: [                'PERCENTAGE',\n                'MIN0_MAX',\n                'MIN_MAX',\n                'RAW_VALUES',\n                'PERCENTAGE_CHANGE',\n                'ROLLING_AVERAGE',\n                'OVERLAPPED_PERCENTAGE',\n                'RATIO'\n              ]\n            },\n            units: {\n              type: 'array',\n              description: 'Measurement units for the results.',\n              items: {\n                type: 'object',\n                properties: {\n                  name: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'name',\n                  'value'\n                ]\n              }\n            }\n          },\n          required: [            'aggInterval',\n            'confidenceInfo',\n            'dateRange',\n            'lastUpdated',\n            'normalization',\n            'units'\n          ]\n        }\n      },\n      required: [        'meta'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      aggInterval: {
        type: 'string',
        description:
          'Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).',
        enum: ['15m', '1h', '1d', '1w'],
      },
      ca: {
        type: 'array',
        description: 'Filters results by certificate authority.',
        items: {
          type: 'string',
        },
      },
      caOwner: {
        type: 'array',
        description: 'Filters results by certificate authority owner.',
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
      duration: {
        type: 'array',
        description: 'Filters results by certificate duration.',
        items: {
          type: 'string',
          enum: [
            'LTE_3D',
            'GT_3D_LTE_7D',
            'GT_7D_LTE_10D',
            'GT_10D_LTE_47D',
            'GT_47D_LTE_100D',
            'GT_100D_LTE_200D',
            'GT_200D',
          ],
        },
      },
      entryType: {
        type: 'array',
        description: 'Filters results by entry type (certificate vs. pre-certificate).',
        items: {
          type: 'string',
          enum: ['PRECERTIFICATE', 'CERTIFICATE'],
        },
      },
      expirationStatus: {
        type: 'array',
        description: 'Filters results by expiration status (expired vs. valid).',
        items: {
          type: 'string',
          enum: ['EXPIRED', 'VALID'],
        },
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      hasIps: {
        type: 'array',
        description: 'Filters results based on whether the certificates are bound to specific IP addresses.',
        items: {
          type: 'boolean',
        },
      },
      hasWildcards: {
        type: 'array',
        description: 'Filters results based on whether the certificates contain wildcard domains.',
        items: {
          type: 'boolean',
        },
      },
      log: {
        type: 'array',
        description: 'Filters results by certificate log.',
        items: {
          type: 'string',
        },
      },
      logApi: {
        type: 'array',
        description: 'Filters results by certificate log API (RFC6962 vs. static).',
        items: {
          type: 'string',
          enum: ['RFC6962', 'STATIC'],
        },
      },
      logOperator: {
        type: 'array',
        description: 'Filters results by certificate log operator.',
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
      publicKeyAlgorithm: {
        type: 'array',
        description: 'Filters results by public key algorithm.',
        items: {
          type: 'string',
          enum: ['DSA', 'ECDSA', 'RSA'],
        },
      },
      signatureAlgorithm: {
        type: 'array',
        description: 'Filters results by signature algorithm.',
        items: {
          type: 'string',
          enum: [
            'DSA_SHA_1',
            'DSA_SHA_256',
            'ECDSA_SHA_1',
            'ECDSA_SHA_256',
            'ECDSA_SHA_384',
            'ECDSA_SHA_512',
            'PSS_SHA_256',
            'PSS_SHA_384',
            'PSS_SHA_512',
            'RSA_MD2',
            'RSA_MD5',
            'RSA_SHA_1',
            'RSA_SHA_256',
            'RSA_SHA_384',
            'RSA_SHA_512',
          ],
        },
      },
      tld: {
        type: 'array',
        description: 'Filters results by top-level domain.',
        items: {
          type: 'string',
        },
      },
      uniqueEntries: {
        type: 'array',
        description:
          'Specifies whether to filter out duplicate certificates and pre-certificates. Set to true for unique entries only.',
        items: {
          type: 'string',
          enum: ['true', 'false'],
        },
      },
      validationLevel: {
        type: 'array',
        description: 'Filters results by validation level.',
        items: {
          type: 'string',
          enum: ['DOMAIN', 'ORGANIZATION', 'EXTENDED'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.radar.ct.timeseries(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
