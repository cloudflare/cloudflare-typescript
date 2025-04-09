// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai.models.schema',
  operation: 'read',
  tags: [],
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.ai.models.schema.get(body);
};

export default { metadata, tool, handler };
