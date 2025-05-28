// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.proxy_endpoints',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}',
  operationId: 'zero-trust-gateway-proxy-endpoints-proxy-endpoint-details',
};

export const tool: Tool = {
  name: 'get_gateway_zero_trust_proxy_endpoints',
  description: 'Fetches a single Zero Trust Gateway proxy endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      proxy_endpoint_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { proxy_endpoint_id, ...body } = args as any;
  return client.zeroTrust.gateway.proxyEndpoints.get(proxy_endpoint_id, body);
};

export default { metadata, tool, handler };
