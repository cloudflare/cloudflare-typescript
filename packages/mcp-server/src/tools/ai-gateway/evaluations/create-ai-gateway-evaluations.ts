// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.evaluations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_ai_gateway_evaluations',
  description: 'Create a new Evaluation',
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
      dataset_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      evaluation_type_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { gateway_id, ...body } = args;
  return client.aiGateway.evaluations.create(gateway_id, body);
};

export default { metadata, tool, handler };
