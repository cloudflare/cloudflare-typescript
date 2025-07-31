// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.interconnects',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/cni/interconnects/{icon}',
  operationId: 'delete_interconnect',
};

export const tool: Tool = {
  name: 'delete_network_interconnects_interconnects',
  description: 'Delete an interconnect object',
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
    required: ['account_id', 'icon'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { icon, ...body } = args as any;
  const response = await client.networkInterconnects.interconnects.delete(icon, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
