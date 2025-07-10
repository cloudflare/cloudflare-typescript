// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.quality.speed',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/quality/speed/histogram',
  operationId: 'radar-get-quality-speed-histogram',
};

export const tool: Tool = {
  name: 'histogram_quality_radar_speed',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a histogram from the previous 90 days of Cloudflare Speed Test data, split into fixed bandwidth (Mbps), latency (ms), or jitter (ms) buckets.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        histogram_0: {\n          type: 'object',\n          properties: {\n            bandwidthDownload: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            bandwidthUpload: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            bucketMin: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            }\n          },\n          required: [            'bandwidthDownload',\n            'bandwidthUpload',\n            'bucketMin'\n          ]\n        },\n        meta: {\n          type: 'object',\n          description: 'Metadata for the results.',\n          properties: {\n            bucketSize: {\n              type: 'integer',\n              description: 'The width for every bucket in the histogram.'\n            },\n            confidenceInfo: {\n              type: 'object',\n              properties: {\n                annotations: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    description: 'Annotation associated with the result (e.g. outage or other type of event).',\n                    properties: {\n                      dataSource: {\n                        type: 'string'\n                      },\n                      description: {\n                        type: 'string'\n                      },\n                      endDate: {\n                        type: 'string',\n                        format: 'date-time'\n                      },\n                      eventType: {\n                        type: 'string'\n                      },\n                      isInstantaneous: {\n                        type: 'boolean',\n                        description: 'Whether event is a single point in time or a time range.'\n                      },\n                      linkedUrl: {\n                        type: 'string'\n                      },\n                      startDate: {\n                        type: 'string',\n                        format: 'date-time'\n                      }\n                    },\n                    required: [                      'dataSource',\n                      'description',\n                      'endDate',\n                      'eventType',\n                      'isInstantaneous',\n                      'linkedUrl',\n                      'startDate'\n                    ]\n                  }\n                },\n                level: {\n                  type: 'integer',\n                  description: 'Provides an indication of how much confidence Cloudflare has in the data.'\n                }\n              },\n              required: [                'annotations',\n                'level'\n              ]\n            },\n            dateRange: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  endTime: {\n                    type: 'string',\n                    description: 'Adjusted end of date range.',\n                    format: 'date-time'\n                  },\n                  startTime: {\n                    type: 'string',\n                    description: 'Adjusted start of date range.',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'endTime',\n                  'startTime'\n                ]\n              }\n            },\n            lastUpdated: {\n              type: 'string',\n              description: 'Timestamp of the last dataset update.',\n              format: 'date-time'\n            },\n            normalization: {\n              type: 'string',\n              description: 'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',\n              enum: [                'PERCENTAGE',\n                'MIN0_MAX',\n                'MIN_MAX',\n                'RAW_VALUES',\n                'PERCENTAGE_CHANGE',\n                'ROLLING_AVERAGE',\n                'OVERLAPPED_PERCENTAGE',\n                'RATIO'\n              ]\n            },\n            totalTests: {\n              type: 'array',\n              items: {\n                type: 'integer'\n              }\n            },\n            units: {\n              type: 'array',\n              description: 'Measurement units for the results.',\n              items: {\n                type: 'object',\n                properties: {\n                  name: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'name',\n                  'value'\n                ]\n              }\n            }\n          },\n          required: [            'bucketSize',\n            'confidenceInfo',\n            'dateRange',\n            'lastUpdated',\n            'normalization',\n            'totalTests',\n            'units'\n          ]\n        }\n      },\n      required: [        'histogram_0',\n        'meta'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
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
      bucketSize: {
        type: 'integer',
        description: 'Specifies the width for every bucket in the histogram.',
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
      metricGroup: {
        type: 'string',
        description: 'Metrics to be returned.',
        enum: ['BANDWIDTH', 'LATENCY', 'JITTER'],
      },
      name: {
        type: 'array',
        description: 'Array of names used to label the series in the response.',
        items: {
          type: 'string',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.radar.quality.speed.histogram(body)));
};

export default { metadata, tool, handler };
