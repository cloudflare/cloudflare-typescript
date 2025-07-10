// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.routes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bgp/routes/realtime',
  operationId: 'radar-get-bgp-routes-realtime',
};

export const tool: Tool = {
  name: 'realtime_bgp_radar_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves real-time BGP routes for a prefix, using public real-time data collectors (RouteViews and RIPE RIS).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        meta: {\n          type: 'object',\n          properties: {\n            asn_info: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  as_name: {\n                    type: 'string',\n                    description: 'Name of the autonomous system.'\n                  },\n                  asn: {\n                    type: 'integer',\n                    description: 'AS number.'\n                  },\n                  country_code: {\n                    type: 'string',\n                    description: 'Alpha-2 code for the AS\\'s registration country.'\n                  },\n                  org_id: {\n                    type: 'string',\n                    description: 'Organization ID.'\n                  },\n                  org_name: {\n                    type: 'string',\n                    description: 'Organization name.'\n                  }\n                },\n                required: [                  'as_name',\n                  'asn',\n                  'country_code',\n                  'org_id',\n                  'org_name'\n                ]\n              }\n            },\n            collectors: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  collector: {\n                    type: 'string',\n                    description: 'Public route collector ID.'\n                  },\n                  latest_realtime_ts: {\n                    type: 'string',\n                    description: 'Latest real-time stream timestamp for this collector.'\n                  },\n                  latest_rib_ts: {\n                    type: 'string',\n                    description: 'Latest RIB dump MRT file timestamp for this collector.'\n                  },\n                  latest_updates_ts: {\n                    type: 'string',\n                    description: 'Latest BGP updates MRT file timestamp for this collector.'\n                  },\n                  peers_count: {\n                    type: 'integer',\n                    description: 'Total number of collector peers used from this collector.'\n                  },\n                  peers_v4_count: {\n                    type: 'integer',\n                    description: 'Total number of collector peers used from this collector for IPv4 prefixes.'\n                  },\n                  peers_v6_count: {\n                    type: 'integer',\n                    description: 'Total number of collector peers used from this collector for IPv6 prefixes.'\n                  }\n                },\n                required: [                  'collector',\n                  'latest_realtime_ts',\n                  'latest_rib_ts',\n                  'latest_updates_ts',\n                  'peers_count',\n                  'peers_v4_count',\n                  'peers_v6_count'\n                ]\n              }\n            },\n            data_time: {\n              type: 'string',\n              description: 'The most recent data timestamp for from the real-time sources.'\n            },\n            prefix_origins: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  origin: {\n                    type: 'integer',\n                    description: 'Origin ASN.'\n                  },\n                  prefix: {\n                    type: 'string',\n                    description: 'IP prefix of this query.'\n                  },\n                  rpki_validation: {\n                    type: 'string',\n                    description: 'Prefix-origin RPKI validation: valid, invalid, unknown.'\n                  },\n                  total_peers: {\n                    type: 'integer',\n                    description: 'Total number of peers.'\n                  },\n                  total_visible: {\n                    type: 'integer',\n                    description: 'Total number of peers seeing this prefix.'\n                  },\n                  visibility: {\n                    type: 'number',\n                    description: 'Ratio of peers seeing this prefix to total number of peers.'\n                  }\n                },\n                required: [                  'origin',\n                  'prefix',\n                  'rpki_validation',\n                  'total_peers',\n                  'total_visible',\n                  'visibility'\n                ]\n              }\n            },\n            query_time: {\n              type: 'string',\n              description: 'The timestamp of this query.'\n            }\n          },\n          required: [            'asn_info',\n            'collectors',\n            'data_time',\n            'prefix_origins',\n            'query_time'\n          ]\n        },\n        routes: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              as_path: {\n                type: 'array',\n                description: 'AS-level path for this route, from collector to origin.',\n                items: {\n                  type: 'integer'\n                }\n              },\n              collector: {\n                type: 'string',\n                description: 'Public collector ID for this route.'\n              },\n              communities: {\n                type: 'array',\n                description: 'BGP community values.',\n                items: {\n                  type: 'string'\n                }\n              },\n              prefix: {\n                type: 'string',\n                description: 'IP prefix of this query.'\n              },\n              timestamp: {\n                type: 'string',\n                description: 'Latest timestamp of change for this route.'\n              }\n            },\n            required: [              'as_path',\n              'collector',\n              'communities',\n              'prefix',\n              'timestamp'\n            ]\n          }\n        }\n      },\n      required: [        'meta',\n        'routes'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      prefix: {
        type: 'string',
        description: 'Network prefix, IPv4 or IPv6.',
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
  return asTextContentResult(await maybeFilter(args, await client.radar.bgp.routes.realtime(body)));
};

export default { metadata, tool, handler };
