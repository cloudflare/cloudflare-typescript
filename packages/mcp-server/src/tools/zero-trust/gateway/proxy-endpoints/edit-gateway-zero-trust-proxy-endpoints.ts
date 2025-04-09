// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.proxy_endpoints',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_gateway_zero_trust_proxy_endpoints',
  description: 'Updates a configured Zero Trust Gateway proxy endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      proxy_endpoint_id: {
        type: 'string',
      },
      ips: {
        type: 'array',
        description: 'A list of CIDRs to restrict ingress connections.',
        items: {
          type: 'string',
          description:
            'The IPv4 CIDR or IPv6 CIDR. IPv6 CIDRs are limited to a maximum of /109. IPv4 CIDRs are limited to a maximum of /25.',
        },
      },
      name: {
        type: 'string',
        description: 'The name of the proxy endpoint.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { proxy_endpoint_id, ...body } = args;
  return client.zeroTrust.gateway.proxyEndpoints.edit(proxy_endpoint_id, body);
};

export default { metadata, tool, handler };
