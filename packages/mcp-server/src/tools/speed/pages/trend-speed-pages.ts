// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'speed.pages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/speed_api/pages/{url}/trend',
  operationId: 'speed-list-page-trend',
};

export const tool: Tool = {
  name: 'trend_speed_pages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists the core web vital metrics trend over time for a specific page.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      $ref: '#/$defs/trend'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    trend: {\n      type: 'object',\n      properties: {\n        cls: {\n          type: 'array',\n          description: 'Cumulative Layout Shift trend.',\n          items: {\n            type: 'number'\n          }\n        },\n        fcp: {\n          type: 'array',\n          description: 'First Contentful Paint trend.',\n          items: {\n            type: 'number'\n          }\n        },\n        lcp: {\n          type: 'array',\n          description: 'Largest Contentful Paint trend.',\n          items: {\n            type: 'number'\n          }\n        },\n        performanceScore: {\n          type: 'array',\n          description: 'The Lighthouse score trend.',\n          items: {\n            type: 'number'\n          }\n        },\n        si: {\n          type: 'array',\n          description: 'Speed Index trend.',\n          items: {\n            type: 'number'\n          }\n        },\n        tbt: {\n          type: 'array',\n          description: 'Total Blocking Time trend.',\n          items: {\n            type: 'number'\n          }\n        },\n        ttfb: {\n          type: 'array',\n          description: 'Time To First Byte trend.',\n          items: {\n            type: 'number'\n          }\n        },\n        tti: {\n          type: 'array',\n          description: 'Time To Interactive trend.',\n          items: {\n            type: 'number'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      url: {
        type: 'string',
        description: 'A URL.',
      },
      deviceType: {
        type: 'string',
        description: 'The type of device.',
        enum: ['DESKTOP', 'MOBILE'],
      },
      metrics: {
        type: 'string',
        description: 'A comma-separated list of metrics to include in the results.',
      },
      region: {
        type: 'string',
        description: 'A test region.',
        enum: [
          'asia-east1',
          'asia-northeast1',
          'asia-northeast2',
          'asia-south1',
          'asia-southeast1',
          'australia-southeast1',
          'europe-north1',
          'europe-southwest1',
          'europe-west1',
          'europe-west2',
          'europe-west3',
          'europe-west4',
          'europe-west8',
          'europe-west9',
          'me-west1',
          'southamerica-east1',
          'us-central1',
          'us-east1',
          'us-east4',
          'us-south1',
          'us-west1',
        ],
      },
      start: {
        type: 'string',
        format: 'date-time',
      },
      tz: {
        type: 'string',
        description: 'The timezone of the start and end timestamps.',
      },
      end: {
        type: 'string',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'url', 'deviceType', 'metrics', 'region', 'start', 'tz'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { url, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.speed.pages.trend(url, body)));
};

export default { metadata, tool, handler };
