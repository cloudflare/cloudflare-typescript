// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.warp_connector',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/warp_connector',
  operationId: 'cloudflare-tunnel-list-warp-connector-tunnels',
};

export const tool: Tool = {
  name: 'list_tunnels_zero_trust_warp_connector',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists and filters Warp Connector Tunnels in an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A Warp Connector Tunnel that connects your origin to Cloudflare\\'s edge.',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'UUID of the tunnel.'\n          },\n          account_tag: {\n            type: 'string',\n            description: 'Cloudflare account ID'\n          },\n          connections: {\n            type: 'array',\n            description: 'The Cloudflare Tunnel connections between your origin and Cloudflare\\'s edge.',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'UUID of the Cloudflare Tunnel connection.'\n                },\n                client_id: {\n                  type: 'string',\n                  description: 'UUID of the Cloudflare Tunnel connector.'\n                },\n                client_version: {\n                  type: 'string',\n                  description: 'The cloudflared version used to establish this connection.'\n                },\n                colo_name: {\n                  type: 'string',\n                  description: 'The Cloudflare data center used for this connection.'\n                },\n                is_pending_reconnect: {\n                  type: 'boolean',\n                  description: 'Cloudflare continues to track connections for several minutes after they disconnect. This is an optimization to improve latency and reliability of reconnecting.  If `true`, the connection has disconnected but is still being tracked. If `false`, the connection is actively serving traffic.'\n                },\n                opened_at: {\n                  type: 'string',\n                  description: 'Timestamp of when the connection was established.',\n                  format: 'date-time'\n                },\n                origin_ip: {\n                  type: 'string',\n                  description: 'The public IP address of the host running cloudflared.'\n                },\n                uuid: {\n                  type: 'string',\n                  description: 'UUID of the Cloudflare Tunnel connection.'\n                }\n              }\n            }\n          },\n          conns_active_at: {\n            type: 'string',\n            description: 'Timestamp of when the tunnel established at least one connection to Cloudflare\\'s edge. If `null`, the tunnel is inactive.',\n            format: 'date-time'\n          },\n          conns_inactive_at: {\n            type: 'string',\n            description: 'Timestamp of when the tunnel became inactive (no connections to Cloudflare\\'s edge). If `null`, the tunnel is active.',\n            format: 'date-time'\n          },\n          created_at: {\n            type: 'string',\n            description: 'Timestamp of when the resource was created.',\n            format: 'date-time'\n          },\n          deleted_at: {\n            type: 'string',\n            description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n            format: 'date-time'\n          },\n          metadata: {\n            type: 'object',\n            description: 'Metadata associated with the tunnel.',\n            additionalProperties: true\n          },\n          name: {\n            type: 'string',\n            description: 'A user-friendly name for a tunnel.'\n          },\n          status: {\n            type: 'string',\n            description: 'The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).',\n            enum: [              'inactive',\n              'degraded',\n              'healthy',\n              'down'\n            ]\n          },\n          tun_type: {\n            type: 'string',\n            description: 'The type of tunnel.',\n            enum: [              'cfd_tunnel',\n              'warp_connector',\n              'warp',\n              'magic',\n              'ip_sec',\n              'gre',\n              'cni'\n            ]\n          }\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      exclude_prefix: {
        type: 'string',
      },
      existed_at: {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
      },
      include_prefix: {
        type: 'string',
      },
      is_deleted: {
        type: 'boolean',
        description:
          'If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for the tunnel.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of results to display.',
      },
      status: {
        type: 'string',
        description:
          'The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).',
        enum: ['inactive', 'degraded', 'healthy', 'down'],
      },
      uuid: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      was_active_at: {
        type: 'string',
        format: 'date-time',
      },
      was_inactive_at: {
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
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.zeroTrust.tunnels.warpConnector.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
