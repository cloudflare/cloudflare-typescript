// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cfd_tunnel',
  operationId: 'cloudflare-tunnel-create-a-cloudflare-tunnel',
};

export const tool: Tool = {
  name: 'create_tunnels_zero_trust_cloudflared',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new Cloudflare Tunnel in an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/cloudflare_tunnel'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    cloudflare_tunnel: {\n      type: 'object',\n      description: 'A Cloudflare Tunnel that connects your origin to Cloudflare\\'s edge.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID of the tunnel.'\n        },\n        account_tag: {\n          type: 'string',\n          description: 'Cloudflare account ID'\n        },\n        config_src: {\n          type: 'string',\n          description: 'Indicates if this is a locally or remotely configured tunnel. If `local`, manage the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the tunnel on the Zero Trust dashboard.',\n          enum: [            'local',\n            'cloudflare'\n          ]\n        },\n        connections: {\n          type: 'array',\n          description: 'The Cloudflare Tunnel connections between your origin and Cloudflare\\'s edge.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'UUID of the Cloudflare Tunnel connection.'\n              },\n              client_id: {\n                type: 'string',\n                description: 'UUID of the Cloudflare Tunnel connector.'\n              },\n              client_version: {\n                type: 'string',\n                description: 'The cloudflared version used to establish this connection.'\n              },\n              colo_name: {\n                type: 'string',\n                description: 'The Cloudflare data center used for this connection.'\n              },\n              is_pending_reconnect: {\n                type: 'boolean',\n                description: 'Cloudflare continues to track connections for several minutes after they disconnect. This is an optimization to improve latency and reliability of reconnecting.  If `true`, the connection has disconnected but is still being tracked. If `false`, the connection is actively serving traffic.'\n              },\n              opened_at: {\n                type: 'string',\n                description: 'Timestamp of when the connection was established.',\n                format: 'date-time'\n              },\n              origin_ip: {\n                type: 'string',\n                description: 'The public IP address of the host running cloudflared.'\n              },\n              uuid: {\n                type: 'string',\n                description: 'UUID of the Cloudflare Tunnel connection.'\n              }\n            }\n          }\n        },\n        conns_active_at: {\n          type: 'string',\n          description: 'Timestamp of when the tunnel established at least one connection to Cloudflare\\'s edge. If `null`, the tunnel is inactive.',\n          format: 'date-time'\n        },\n        conns_inactive_at: {\n          type: 'string',\n          description: 'Timestamp of when the tunnel became inactive (no connections to Cloudflare\\'s edge). If `null`, the tunnel is active.',\n          format: 'date-time'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was created.',\n          format: 'date-time'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n          format: 'date-time'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Metadata associated with the tunnel.',\n          additionalProperties: true\n        },\n        name: {\n          type: 'string',\n          description: 'A user-friendly name for a tunnel.'\n        },\n        remote_config: {\n          type: 'boolean',\n          description: 'If `true`, the tunnel can be configured remotely from the Zero Trust dashboard. If `false`, the tunnel must be configured locally on the origin machine.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).',\n          enum: [            'inactive',\n            'degraded',\n            'healthy',\n            'down'\n          ]\n        },\n        tun_type: {\n          type: 'string',\n          description: 'The type of tunnel.',\n          enum: [            'cfd_tunnel',\n            'warp_connector',\n            'warp',\n            'magic',\n            'ip_sec',\n            'gre',\n            'cni'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for a tunnel.',
      },
      config_src: {
        type: 'string',
        description:
          'Indicates if this is a locally or remotely configured tunnel. If `local`, manage the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the tunnel on the Zero Trust dashboard.',
        enum: ['local', 'cloudflare'],
      },
      tunnel_secret: {
        type: 'string',
        description:
          'Sets the password required to run a locally-managed tunnel. Must be at least 32 bytes and encoded as a base64 string.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.tunnels.cloudflared.create(body)),
  );
};

export default { metadata, tool, handler };
