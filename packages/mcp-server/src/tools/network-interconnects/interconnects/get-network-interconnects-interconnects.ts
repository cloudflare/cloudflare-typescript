// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.interconnects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cni/interconnects/{icon}',
  operationId: 'get_interconnect',
};

export const tool: Tool = {
  name: 'get_network_interconnects_interconnects',
  description: 'Get information about an interconnect object',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      icon: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { icon, ...body } = args as any;
  return asTextContentResult(await client.networkInterconnects.interconnects.get(icon, body));
};

export default { metadata, tool, handler };
