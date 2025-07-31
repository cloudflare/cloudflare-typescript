// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.cnis',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/cni/cnis/{cni}',
  operationId: 'delete_cni',
};

export const tool: Tool = {
  name: 'delete_network_interconnects_cnis',
  description: 'Delete a specified CNI object',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      cni: {
        type: 'string',
      },
    },
    required: ['account_id', 'cni'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { cni, ...body } = args as any;
  const response = await client.networkInterconnects.cnis.delete(cni, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
