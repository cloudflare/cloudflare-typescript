// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.proxy_endpoints',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/gateway/proxy_endpoints',
  operationId: 'zero-trust-gateway-proxy-endpoints-create-proxy-endpoint',
};

export const tool: Tool = {
  name: 'create_gateway_zero_trust_proxy_endpoints',
  description: 'Creates a new Zero Trust Gateway proxy endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      ips: {
        type: 'array',
        description: 'A list of CIDRs to restrict ingress connections.',
        items: {
          $ref: '#/$defs/gateway_ips',
        },
      },
      name: {
        type: 'string',
        description: 'The name of the proxy endpoint.',
      },
    },
    $defs: {
      gateway_ips: {
        type: 'string',
        description:
          'The IPv4 CIDR or IPv6 CIDR. IPv6 CIDRs are limited to a maximum of /109. IPv4 CIDRs are limited to a maximum of /25.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.gateway.proxyEndpoints.create(body);
};

export default { metadata, tool, handler };
