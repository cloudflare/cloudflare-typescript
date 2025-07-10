// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/load_balancers/{load_balancer_id}',
  operationId: 'load-balancers-load-balancer-details',
};

export const tool: Tool = {
  name: 'get_load_balancers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a single configured load balancer.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
      },
      load_balancer_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { load_balancer_id, ...body } = args as any;
  return asTextContentResult(await client.loadBalancers.get(load_balancer_id, body));
};

export default { metadata, tool, handler };
