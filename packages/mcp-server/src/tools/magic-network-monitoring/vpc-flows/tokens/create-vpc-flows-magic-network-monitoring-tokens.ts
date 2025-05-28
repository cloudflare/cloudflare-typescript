// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.vpc_flows.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/mnm/vpc-flows/token',
  operationId: 'magic-network-monitoring-vpc-flows-generate-authentication-token',
};

export const tool: Tool = {
  name: 'create_vpc_flows_magic_network_monitoring_tokens',
  description: 'Generate authentication token for VPC flow logs export.',
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
  return client.magicNetworkMonitoring.vpcFlows.tokens.create(body);
};

export default { metadata, tool, handler };
