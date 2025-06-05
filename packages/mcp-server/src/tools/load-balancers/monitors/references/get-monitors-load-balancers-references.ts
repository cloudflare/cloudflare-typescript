// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.monitors.references',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/monitors/{monitor_id}/references',
  operationId: 'account-load-balancer-monitors-list-monitor-references',
};

export const tool: Tool = {
  name: 'get_monitors_load_balancers_references',
  description: 'Get the list of resources that reference the provided monitor.',
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
  return asTextContentResult(await client.loadBalancers.monitors.references.get(monitor_id, body));
};

export default { metadata, tool, handler };
