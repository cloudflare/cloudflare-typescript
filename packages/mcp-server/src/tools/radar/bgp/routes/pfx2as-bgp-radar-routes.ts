// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.routes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bgp/routes/pfx2as',
  operationId: 'radar-get-bgp-pfx2as',
};

export const tool: Tool = {
  name: 'pfx2as_bgp_radar_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the prefix-to-ASN mapping from global routing tables.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        meta: {\n          type: 'object',\n          properties: {\n            data_time: {\n              type: 'string'\n            },\n            query_time: {\n              type: 'string'\n            },\n            total_peers: {\n              type: 'integer'\n            }\n          },\n          required: [            'data_time',\n            'query_time',\n            'total_peers'\n          ]\n        },\n        prefix_origins: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              origin: {\n                type: 'integer'\n              },\n              peer_count: {\n                type: 'integer'\n              },\n              prefix: {\n                type: 'string'\n              },\n              rpki_validation: {\n                type: 'string'\n              }\n            },\n            required: [              'origin',\n              'peer_count',\n              'prefix',\n              'rpki_validation'\n            ]\n          }\n        }\n      },\n      required: [        'meta',\n        'prefix_origins'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      longestPrefixMatch: {
        type: 'boolean',
        description:
          'Return only results with the longest prefix match for the given prefix. For example, specify a /32 prefix to lookup the origin ASN for an IPv4 address.',
      },
      origin: {
        type: 'integer',
        description: 'Lookup prefixes originated by the given ASN.',
      },
      prefix: {
        type: 'string',
      },
      rpkiStatus: {
        type: 'string',
        description: 'Return only results with matching rpki status: valid, invalid or unknown.',
        enum: ['VALID', 'INVALID', 'UNKNOWN'],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.bgp.routes.pfx2as(body)));
};

export default { metadata, tool, handler };
