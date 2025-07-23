// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/radar/datasets/download',
  operationId: 'radar-post-reports-dataset-download-url',
};

export const tool: Tool = {
  name: 'download_radar_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves an URL to download a single dataset.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        dataset: {\n          type: 'object',\n          properties: {\n            url: {\n              type: 'string'\n            }\n          },\n          required: [            'url'\n          ]\n        }\n      },\n      required: [        'dataset'\n      ]\n    }\n  },\n  required: [    'result'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      datasetId: {
        type: 'integer',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['datasetId'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.radar.datasets.download(body)));
};

export default { metadata, tool, handler };
