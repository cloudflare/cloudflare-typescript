// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.proxy_endpoints',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}',
  operationId: 'zero-trust-gateway-proxy-endpoints-delete-proxy-endpoint',
};

export const tool: Tool = {
  name: 'delete_gateway_zero_trust_proxy_endpoints',
  description: 'Delete a configured Zero Trust Gateway proxy endpoint.',
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
    required: ['account_id', 'proxy_endpoint_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { proxy_endpoint_id, ...body } = args as any;
  return asTextContentResult(
    (await client.zeroTrust.gateway.proxyEndpoints.delete(proxy_endpoint_id, body)) as object,
  );
};

export default { metadata, tool, handler };
