// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.interconnects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cni/interconnects/{icon}/loa',
  operationId: 'get_interconnect_loa',
};

export const tool: Tool = {
  name: 'loa_network_interconnects_interconnects',
  description: 'Generate the Letter of Authorization (LOA) for a given interconnect',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { icon, ...body } = args as any;
  const response = await client.networkInterconnects.interconnects.loa(icon, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
