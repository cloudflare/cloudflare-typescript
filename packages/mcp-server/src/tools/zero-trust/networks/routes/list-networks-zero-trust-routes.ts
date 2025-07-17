// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.routes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/teamnet/routes',
  operationId: 'tunnel-route-list-tunnel-routes',
};

export const tool: Tool = {
  name: 'list_networks_zero_trust_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists and filters private network routes in an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/teamnet'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    teamnet: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID of the route.'\n        },\n        comment: {\n          type: 'string',\n          description: 'Optional remark describing the route.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was created.',\n          format: 'date-time'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n          format: 'date-time'\n        },\n        network: {\n          type: 'string',\n          description: 'The private IPv4 or IPv6 range connected by the route, in CIDR notation.'\n        },\n        tun_type: {\n          type: 'string',\n          description: 'The type of tunnel.',\n          enum: [            'cfd_tunnel',\n            'warp_connector',\n            'warp',\n            'magic',\n            'ip_sec',\n            'gre',\n            'cni'\n          ]\n        },\n        tunnel_id: {\n          type: 'string',\n          description: 'UUID of the tunnel.'\n        },\n        tunnel_name: {\n          type: 'string',\n          description: 'A user-friendly name for a tunnel.'\n        },\n        virtual_network_id: {\n          type: 'string',\n          description: 'UUID of the virtual network.'\n        },\n        virtual_network_name: {\n          type: 'string',\n          description: 'A user-friendly name for the virtual network.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      comment: {
        type: 'string',
        description: 'Optional remark describing the route.',
      },
      existed_at: {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
      },
      is_deleted: {
        type: 'boolean',
        description:
          'If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.',
      },
      network_subset: {
        type: 'string',
        description: 'If set, only list routes that are contained within this IP range.',
      },
      network_superset: {
        type: 'string',
        description: 'If set, only list routes that contain this IP range.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of results to display.',
      },
      route_id: {
        type: 'string',
        description: 'UUID of the route.',
      },
      tun_types: {
        type: 'array',
        description: 'The types of tunnels to filter by, separated by commas.',
        items: {
          type: 'string',
          description: 'The type of tunnel.',
          enum: ['cfd_tunnel', 'warp_connector', 'warp', 'magic', 'ip_sec', 'gre', 'cni'],
        },
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      virtual_network_id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.networks.routes.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
