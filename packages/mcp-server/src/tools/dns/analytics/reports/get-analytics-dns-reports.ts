// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.analytics.reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/dns_analytics/report',
  operationId: 'dns-analytics-table',
};

export const tool: Tool = {
  name: 'get_analytics_dns_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of summarised aggregate metrics over a given time period.\n\nSee [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/report'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    report: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          description: 'Array with one row per combination of dimension values.',\n          items: {\n            type: 'object',\n            properties: {\n              dimensions: {\n                type: 'array',\n                description: 'Array of dimension values, representing the combination of dimension values corresponding to this row.',\n                items: {\n                  type: 'string',\n                  description: 'Dimension value.'\n                }\n              },\n              metrics: {\n                type: 'array',\n                description: 'Array with one item per requested metric. Each item is a single value.',\n                items: {\n                  type: 'number',\n                  description: 'Nominal metric value.'\n                }\n              }\n            },\n            required: [              'dimensions',\n              'metrics'\n            ]\n          }\n        },\n        data_lag: {\n          type: 'number',\n          description: 'Number of seconds between current time and last processed event, in another words how many seconds of data could be missing.'\n        },\n        max: {\n          type: 'object',\n          description: 'Maximum results for each metric (object mapping metric names to values). Currently always an empty object.'\n        },\n        min: {\n          type: 'object',\n          description: 'Minimum results for each metric (object mapping metric names to values). Currently always an empty object.'\n        },\n        query: {\n          type: 'object',\n          properties: {\n            dimensions: {\n              type: 'array',\n              description: 'Array of dimension names.',\n              items: {\n                type: 'string',\n                description: 'Dimension name.'\n              }\n            },\n            limit: {\n              type: 'integer',\n              description: 'Limit number of returned metrics.'\n            },\n            metrics: {\n              type: 'array',\n              description: 'Array of metric names.',\n              items: {\n                type: 'string',\n                description: 'Metric name.'\n              }\n            },\n            since: {\n              type: 'string',\n              description: 'Start date and time of requesting data period in ISO 8601 format.',\n              format: 'date-time'\n            },\n            until: {\n              type: 'string',\n              description: 'End date and time of requesting data period in ISO 8601 format.',\n              format: 'date-time'\n            },\n            filters: {\n              type: 'string',\n              description: 'Segmentation filter in \\'attribute operator value\\' format.'\n            },\n            sort: {\n              type: 'array',\n              description: 'Array of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending).',\n              items: {\n                type: 'string',\n                description: 'Dimension name (may be prefixed by - (descending) or + (ascending).'\n              }\n            }\n          },\n          required: [            'dimensions',\n            'limit',\n            'metrics',\n            'since',\n            'until'\n          ]\n        },\n        rows: {\n          type: 'number',\n          description: 'Total number of rows in the result.'\n        },\n        totals: {\n          type: 'object',\n          description: 'Total results for metrics across all data (object mapping metric names to values).'\n        }\n      },\n      required: [        'data',\n        'data_lag',\n        'max',\n        'min',\n        'query',\n        'rows',\n        'totals'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      dimensions: {
        type: 'string',
        description: 'A comma-separated list of dimensions to group results by.',
      },
      filters: {
        type: 'string',
        description: "Segmentation filter in 'attribute operator value' format.",
      },
      limit: {
        type: 'integer',
        description: 'Limit number of returned metrics.',
      },
      metrics: {
        type: 'string',
        description: 'A comma-separated list of metrics to query.',
      },
      since: {
        type: 'string',
        description: 'Start date and time of requesting data period in ISO 8601 format.',
        format: 'date-time',
      },
      sort: {
        type: 'string',
        description:
          'A comma-separated list of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending).',
      },
      until: {
        type: 'string',
        description: 'End date and time of requesting data period in ISO 8601 format.',
        format: 'date-time',
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
  return asTextContentResult(await maybeFilter(args, await client.dns.analytics.reports.get(body)));
};

export default { metadata, tool, handler };
