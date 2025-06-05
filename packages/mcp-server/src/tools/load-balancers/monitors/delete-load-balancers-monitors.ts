// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.monitors',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/load_balancers/monitors/{monitor_id}',
  operationId: 'account-load-balancer-monitors-delete-monitor',
};

export const tool: Tool = {
  name: 'delete_load_balancers_monitors',
  description: 'Delete a configured monitor.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { monitor_id, ...body } = args as any;
  return asTextContentResult(await client.loadBalancers.monitors.delete(monitor_id, body));
};

export default { metadata, tool, handler };
