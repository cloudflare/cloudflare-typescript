// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared.connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections',
  operationId: 'cloudflare-tunnel-list-cloudflare-tunnel-connections',
};

export const tool: Tool = {
  name: 'get_cloudflared_tunnels_zero_trust_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches connection details for a Cloudflare Tunnel.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/client'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    client: {\n      type: 'object',\n      description: 'A client (typically cloudflared) that maintains connections to a Cloudflare data center.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID of the Cloudflare Tunnel connection.'\n        },\n        arch: {\n          type: 'string',\n          description: 'The cloudflared OS architecture used to establish this connection.'\n        },\n        config_version: {\n          type: 'integer',\n          description: 'The version of the remote tunnel configuration. Used internally to sync cloudflared with the Zero Trust dashboard.'\n        },\n        conns: {\n          type: 'array',\n          description: 'The Cloudflare Tunnel connections between your origin and Cloudflare\\'s edge.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'UUID of the Cloudflare Tunnel connection.'\n              },\n              client_id: {\n                type: 'string',\n                description: 'UUID of the Cloudflare Tunnel connector.'\n              },\n              client_version: {\n                type: 'string',\n                description: 'The cloudflared version used to establish this connection.'\n              },\n              colo_name: {\n                type: 'string',\n                description: 'The Cloudflare data center used for this connection.'\n              },\n              is_pending_reconnect: {\n                type: 'boolean',\n                description: 'Cloudflare continues to track connections for several minutes after they disconnect. This is an optimization to improve latency and reliability of reconnecting.  If `true`, the connection has disconnected but is still being tracked. If `false`, the connection is actively serving traffic.'\n              },\n              opened_at: {\n                type: 'string',\n                description: 'Timestamp of when the connection was established.',\n                format: 'date-time'\n              },\n              origin_ip: {\n                type: 'string',\n                description: 'The public IP address of the host running cloudflared.'\n              },\n              uuid: {\n                type: 'string',\n                description: 'UUID of the Cloudflare Tunnel connection.'\n              }\n            },\n            required: []\n          }\n        },\n        features: {\n          type: 'array',\n          description: 'Features enabled for the Cloudflare Tunnel.',\n          items: {\n            type: 'string'\n          }\n        },\n        run_at: {\n          type: 'string',\n          description: 'Timestamp of when the tunnel connection was started.',\n          format: 'date-time'\n        },\n        version: {\n          type: 'string',\n          description: 'The cloudflared version used to establish this connection.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
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
  const { tunnel_id, ...body } = args as any;
  const response = await client.zeroTrust.tunnels.cloudflared.connections.get(tunnel_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
