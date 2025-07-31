// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.logs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/request',
  operationId: 'aig-config-get-gateway-log-request',
};

export const tool: Tool = {
  name: 'request_ai_gateway_logs',
  description: 'Get Gateway Log Request',
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
    },
    required: ['account_id', 'gateway_id', 'id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult((await client.aiGateway.logs.request(id, body)) as object);
};

export default { metadata, tool, handler };
