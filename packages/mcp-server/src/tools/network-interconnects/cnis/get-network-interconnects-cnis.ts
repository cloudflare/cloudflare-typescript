// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.cnis',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cni/cnis/{cni}',
  operationId: 'get_cni',
};

export const tool: Tool = {
  name: 'get_network_interconnects_cnis',
  description: 'Get information about a CNI object',
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { cni, ...body } = args as any;
  return asTextContentResult(await client.networkInterconnects.cnis.get(cni, body));
};

export default { metadata, tool, handler };
