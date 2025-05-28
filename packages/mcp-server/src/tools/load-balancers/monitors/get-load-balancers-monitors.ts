// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.monitors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/monitors/{monitor_id}',
  operationId: 'account-load-balancer-monitors-monitor-details',
};

export const tool: Tool = {
  name: 'get_load_balancers_monitors',
  description: 'List a single configured monitor for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      monitor_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { monitor_id, ...body } = args as any;
  return client.loadBalancers.monitors.get(monitor_id, body);
};

export default { metadata, tool, handler };
