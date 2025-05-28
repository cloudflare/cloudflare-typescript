// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.proxy_endpoints',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/proxy_endpoints',
  operationId: 'zero-trust-gateway-proxy-endpoints-list-proxy-endpoints',
};

export const tool: Tool = {
  name: 'list_gateway_zero_trust_proxy_endpoints',
  description: 'Fetches all Zero Trust Gateway proxy endpoints for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.gateway.proxyEndpoints.list(body);
};

export default { metadata, tool, handler };
