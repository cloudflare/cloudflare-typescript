// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.top.ases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bgp/top/ases/prefixes',
  operationId: 'radar-get-bgp-top-asns-by-prefixes',
};

export const tool: Tool = {
  name: 'prefixes_top_bgp_radar_ases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the full list of autonomous systems on the global routing table ordered by announced prefixes count. The data comes from public BGP MRT data archives and updates every 2 hours.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        asns: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              asn: {\n                type: 'integer'\n              },\n              country: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              pfxs_count: {\n                type: 'integer'\n              }\n            },\n            required: [              'asn',\n              'country',\n              'name',\n              'pfxs_count'\n            ]\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            data_time: {\n              type: 'string'\n            },\n            query_time: {\n              type: 'string'\n            },\n            total_peers: {\n              type: 'integer'\n            }\n          },\n          required: [            'data_time',\n            'query_time',\n            'total_peers'\n          ]\n        }\n      },\n      required: [        'asns',\n        'meta'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      country: {
        type: 'string',
        description: 'Alpha-2 country code.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of ASes to return.',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.radar.bgp.top.ases.prefixes(body)));
};

export default { metadata, tool, handler };
