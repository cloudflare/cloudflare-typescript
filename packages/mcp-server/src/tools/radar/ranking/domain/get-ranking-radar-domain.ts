// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ranking.domain',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/ranking/domain/{domain}',
  operationId: 'radar-get-ranking-domain-details',
};

export const tool: Tool = {
  name: 'get_ranking_radar_domain',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves domain rank details. Cloudflare provides an ordered rank for the top 100 domains, but for the remainder it only provides ranking buckets like top 200 thousand, top one million, etc.. These are available through Radar datasets endpoints.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        details_0: {\n          type: 'object',\n          properties: {\n            categories: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'integer'\n                  },\n                  name: {\n                    type: 'string'\n                  },\n                  superCategoryId: {\n                    type: 'integer'\n                  }\n                },\n                required: [                  'id',\n                  'name',\n                  'superCategoryId'\n                ]\n              }\n            },\n            bucket: {\n              type: 'string',\n              description: 'Only available in POPULAR ranking for the most recent ranking.'\n            },\n            rank: {\n              type: 'integer'\n            },\n            top_locations: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  locationCode: {\n                    type: 'string'\n                  },\n                  locationName: {\n                    type: 'string'\n                  },\n                  rank: {\n                    type: 'integer'\n                  }\n                },\n                required: [                  'locationCode',\n                  'locationName',\n                  'rank'\n                ]\n              }\n            }\n          },\n          required: [            'categories'\n          ]\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            dateRange: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  endTime: {\n                    type: 'string',\n                    description: 'Adjusted end of date range.',\n                    format: 'date-time'\n                  },\n                  startTime: {\n                    type: 'string',\n                    description: 'Adjusted start of date range.',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'endTime',\n                  'startTime'\n                ]\n              }\n            }\n          },\n          required: [            'dateRange'\n          ]\n        }\n      },\n      required: [        'details_0',\n        'meta'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description: 'Domain name.',
      },
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
      includeTopLocations: {
        type: 'boolean',
        description: 'Includes top locations in the response.',
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
      rankingType: {
        type: 'string',
        description: 'The ranking type.',
        enum: ['POPULAR', 'TRENDING_RISE', 'TRENDING_STEADY'],
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
  const { domain, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.radar.ranking.domain.get(domain, body)));
};

export default { metadata, tool, handler };
