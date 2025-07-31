// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.robots_txt.top',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/robots_txt/top/domain_categories',
  operationId: 'radar-get-robots-txt-top-domain-categories-by-files-parsed',
};

export const tool: Tool = {
  name: 'domain_categories_robots_txt_radar_top',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the top domain categories by the number of robots.txt files parsed.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        meta: {\n          type: 'object',\n          description: 'Metadata for the results.',\n          properties: {\n            confidenceInfo: {\n              type: 'object',\n              properties: {\n                annotations: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    description: 'Annotation associated with the result (e.g. outage or other type of event).',\n                    properties: {\n                      dataSource: {\n                        type: 'string'\n                      },\n                      description: {\n                        type: 'string'\n                      },\n                      endDate: {\n                        type: 'string',\n                        format: 'date-time'\n                      },\n                      eventType: {\n                        type: 'string'\n                      },\n                      isInstantaneous: {\n                        type: 'boolean',\n                        description: 'Whether event is a single point in time or a time range.'\n                      },\n                      linkedUrl: {\n                        type: 'string'\n                      },\n                      startDate: {\n                        type: 'string',\n                        format: 'date-time'\n                      }\n                    },\n                    required: [                      'dataSource',\n                      'description',\n                      'endDate',\n                      'eventType',\n                      'isInstantaneous',\n                      'linkedUrl',\n                      'startDate'\n                    ]\n                  }\n                },\n                level: {\n                  type: 'integer',\n                  description: 'Provides an indication of how much confidence Cloudflare has in the data.'\n                }\n              },\n              required: [                'annotations',\n                'level'\n              ]\n            },\n            dateRange: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  endTime: {\n                    type: 'string',\n                    description: 'Adjusted end of date range.',\n                    format: 'date-time'\n                  },\n                  startTime: {\n                    type: 'string',\n                    description: 'Adjusted start of date range.',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'endTime',\n                  'startTime'\n                ]\n              }\n            },\n            lastUpdated: {\n              type: 'string',\n              description: 'Timestamp of the last dataset update.',\n              format: 'date-time'\n            },\n            normalization: {\n              type: 'string',\n              description: 'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',\n              enum: [                'PERCENTAGE',\n                'MIN0_MAX',\n                'MIN_MAX',\n                'RAW_VALUES',\n                'PERCENTAGE_CHANGE',\n                'ROLLING_AVERAGE',\n                'OVERLAPPED_PERCENTAGE',\n                'RATIO'\n              ]\n            },\n            units: {\n              type: 'array',\n              description: 'Measurement units for the results.',\n              items: {\n                type: 'object',\n                properties: {\n                  name: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'name',\n                  'value'\n                ]\n              }\n            }\n          },\n          required: [            'confidenceInfo',\n            'dateRange',\n            'lastUpdated',\n            'normalization',\n            'units'\n          ]\n        },\n        top_0: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string'\n              },\n              value: {\n                type: 'integer'\n              }\n            },\n            required: [              'name',\n              'value'\n            ]\n          }\n        }\n      },\n      required: [        'meta',\n        'top_0'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      date: {
        type: 'array',
        description: 'Filters results by the specified array of dates.',
        items: {
          type: 'string',
          format: 'date',
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
      userAgentCategory: {
        type: 'string',
        description: 'Filters results by user agent category.',
        enum: ['AI'],
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.radar.robotsTXT.top.domainCategories(body)),
  );
};

export default { metadata, tool, handler };
