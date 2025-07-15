// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/datasets',
  operationId: 'radar-get-reports-datasets',
};

export const tool: Tool = {
  name: 'list_radar_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of datasets.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        datasets: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              description: {\n                type: 'string'\n              },\n              meta: {\n                type: 'object'\n              },\n              tags: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              title: {\n                type: 'string'\n              },\n              type: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'description',\n              'meta',\n              'tags',\n              'title',\n              'type'\n            ]\n          }\n        }\n      },\n      required: [        'datasets'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      datasetType: {
        type: 'string',
        description: 'Filters results by dataset type.',
        enum: ['RANKING_BUCKET', 'REPORT'],
      },
      date: {
        type: 'string',
        description: 'Filters results by the specified date.',
        format: 'date',
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
      offset: {
        type: 'integer',
        description: 'Skips the specified number of objects before fetching the results.',
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
  return asTextContentResult(await maybeFilter(args, await client.radar.datasets.list(body)));
};

export default { metadata, tool, handler };
