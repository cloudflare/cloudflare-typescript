// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.logs',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}',
  operationId: 'aig-config-patch-gateway-log',
};

export const tool: Tool = {
  name: 'edit_ai_gateway_logs',
  description: 'Patch Gateway Log',
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
      id: {
        type: 'string',
      },
      feedback: {
        type: 'number',
      },
      metadata: {
        type: 'object',
        additionalProperties: true,
      },
      score: {
        type: 'number',
      },
    },
    required: ['account_id', 'gateway_id', 'id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult((await client.aiGateway.logs.edit(id, body)) as object);
};

export default { metadata, tool, handler };
