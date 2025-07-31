// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.routes.ips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/teamnet/routes/ip/{ip}',
  operationId: 'tunnel-route-get-tunnel-route-by-ip',
};

export const tool: Tool = {
  name: 'get_routes_networks_zero_trust_ips',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches routes that contain the given IP address.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/teamnet'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    teamnet: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID of the route.'\n        },\n        comment: {\n          type: 'string',\n          description: 'Optional remark describing the route.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was created.',\n          format: 'date-time'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n          format: 'date-time'\n        },\n        network: {\n          type: 'string',\n          description: 'The private IPv4 or IPv6 range connected by the route, in CIDR notation.'\n        },\n        tun_type: {\n          type: 'string',\n          description: 'The type of tunnel.',\n          enum: [            'cfd_tunnel',\n            'warp_connector',\n            'warp',\n            'magic',\n            'ip_sec',\n            'gre',\n            'cni'\n          ]\n        },\n        tunnel_id: {\n          type: 'string',\n          description: 'UUID of the tunnel.'\n        },\n        tunnel_name: {\n          type: 'string',\n          description: 'A user-friendly name for a tunnel.'\n        },\n        virtual_network_id: {\n          type: 'string',\n          description: 'UUID of the virtual network.'\n        },\n        virtual_network_name: {\n          type: 'string',\n          description: 'A user-friendly name for the virtual network.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      ip: {
        type: 'string',
      },
      default_virtual_network_fallback: {
        type: 'boolean',
        description:
          'When the virtual_network_id parameter is not provided the request filter will default search routes that are in the default virtual network for the account. If this parameter is set to false, the search will include routes that do not have a virtual network.',
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
    required: ['account_id', 'ip'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ip, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.networks.routes.ips.get(ip, body)),
  );
};

export default { metadata, tool, handler };
