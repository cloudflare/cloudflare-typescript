// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.evaluations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations',
  operationId: 'aig-config-list-evaluations',
};

export const tool: Tool = {
  name: 'list_ai_gateway_evaluations',
  description: 'List Evaluations',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      gateway_id: {
        type: 'string',
        description: 'gateway id',
      },
      name: {
        type: 'string',
      },
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
      processed: {
        type: 'boolean',
      },
      search: {
        type: 'string',
        description: 'Search by id, name',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { gateway_id, ...body } = args as any;
  return asTextContentResult(await client.aiGateway.evaluations.list(gateway_id, body));
};

export default { metadata, tool, handler };
