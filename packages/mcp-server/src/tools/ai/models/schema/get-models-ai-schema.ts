// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai.models.schema',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/ai/models/schema',
  operationId: 'workers-ai-get-model-schema',
};

export const tool: Tool = {
  name: 'get_models_ai_schema',
  description: 'Get Model Schema',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      model: {
        type: 'string',
        description: 'Model Name',
      },
    },
    required: ['account_id', 'model'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.ai.models.schema.get(body)) as object);
};

export default { metadata, tool, handler };
