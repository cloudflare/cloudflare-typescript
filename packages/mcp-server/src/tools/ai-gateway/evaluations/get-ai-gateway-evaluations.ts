// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.evaluations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}',
  operationId: 'aig-config-fetch-evaluations',
};

export const tool: Tool = {
  name: 'get_ai_gateway_evaluations',
  description: 'Fetch a Evaluation',
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
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.aiGateway.evaluations.get(id, body);
};

export default { metadata, tool, handler };
