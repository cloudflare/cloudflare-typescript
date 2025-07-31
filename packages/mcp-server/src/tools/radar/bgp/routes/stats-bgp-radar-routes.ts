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
  httpPath: '/radar/bgp/routes/stats',
  operationId: 'radar-get-bgp-routes-stats',
};

export const tool: Tool = {
  name: 'stats_bgp_radar_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the BGP routing table stats.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        meta: {\n          type: 'object',\n          properties: {\n            data_time: {\n              type: 'string'\n            },\n            query_time: {\n              type: 'string'\n            },\n            total_peers: {\n              type: 'integer'\n            }\n          },\n          required: [            'data_time',\n            'query_time',\n            'total_peers'\n          ]\n        },\n        stats: {\n          type: 'object',\n          properties: {\n            distinct_origins: {\n              type: 'integer'\n            },\n            distinct_origins_ipv4: {\n              type: 'integer'\n            },\n            distinct_origins_ipv6: {\n              type: 'integer'\n            },\n            distinct_prefixes: {\n              type: 'integer'\n            },\n            distinct_prefixes_ipv4: {\n              type: 'integer'\n            },\n            distinct_prefixes_ipv6: {\n              type: 'integer'\n            },\n            routes_invalid: {\n              type: 'integer'\n            },\n            routes_invalid_ipv4: {\n              type: 'integer'\n            },\n            routes_invalid_ipv6: {\n              type: 'integer'\n            },\n            routes_total: {\n              type: 'integer'\n            },\n            routes_total_ipv4: {\n              type: 'integer'\n            },\n            routes_total_ipv6: {\n              type: 'integer'\n            },\n            routes_unknown: {\n              type: 'integer'\n            },\n            routes_unknown_ipv4: {\n              type: 'integer'\n            },\n            routes_unknown_ipv6: {\n              type: 'integer'\n            },\n            routes_valid: {\n              type: 'integer'\n            },\n            routes_valid_ipv4: {\n              type: 'integer'\n            },\n            routes_valid_ipv6: {\n              type: 'integer'\n            }\n          },\n          required: [            'distinct_origins',\n            'distinct_origins_ipv4',\n            'distinct_origins_ipv6',\n            'distinct_prefixes',\n            'distinct_prefixes_ipv4',\n            'distinct_prefixes_ipv6',\n            'routes_invalid',\n            'routes_invalid_ipv4',\n            'routes_invalid_ipv6',\n            'routes_total',\n            'routes_total_ipv4',\n            'routes_total_ipv6',\n            'routes_unknown',\n            'routes_unknown_ipv4',\n            'routes_unknown_ipv6',\n            'routes_valid',\n            'routes_valid_ipv4',\n            'routes_valid_ipv6'\n          ]\n        }\n      },\n      required: [        'meta',\n        'stats'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description:
          'Filters results by Autonomous System. Specify a single Autonomous System Number (ASN) as integer.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      location: {
        type: 'string',
        description: 'Filters results by location. Specify an alpha-2 location code.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.bgp.routes.stats(body)));
};

export default { metadata, tool, handler };
