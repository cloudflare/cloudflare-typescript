// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/load_balancers/{load_balancer_id}',
  operationId: 'load-balancers-delete-load-balancer',
};

export const tool: Tool = {
  name: 'delete_load_balancers',
  description: 'Delete a configured load balancer.',
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
  return asTextContentResult(await client.loadBalancers.delete(load_balancer_id, body));
};

export default { metadata, tool, handler };
