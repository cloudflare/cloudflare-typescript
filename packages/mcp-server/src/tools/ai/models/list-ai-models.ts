// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai.models',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/ai/models/search',
  operationId: 'workers-ai-search-model',
};

export const tool: Tool = {
  name: 'list_ai_models',
  description: 'Model Search',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      author: {
        type: 'string',
        description: 'Filter by Author',
      },
      hide_experimental: {
        type: 'boolean',
        description: 'Filter to hide experimental models',
      },
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
      search: {
        type: 'string',
        description: 'Search',
      },
      source: {
        type: 'number',
        description: 'Filter by Source Id',
      },
      task: {
        type: 'string',
        description: 'Filter by Task Name',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.ai.models.list(body)) as object);
};

export default { metadata, tool, handler };
