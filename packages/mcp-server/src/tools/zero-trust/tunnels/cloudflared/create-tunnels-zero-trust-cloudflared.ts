// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Creates a new Cloudflare Tunnel in an account.',
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
    },
    required: ['account_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.tunnels.cloudflared.create(body));
};

export default { metadata, tool, handler };
