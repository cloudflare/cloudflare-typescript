// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.evaluation_types',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_ai_gateway_evaluation_types',
  description: 'List Evaluators',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      order_by: {
        type: 'string',
      },
      order_by_direction: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.aiGateway.evaluationTypes.list(body);
};

export default { metadata, tool, handler };
