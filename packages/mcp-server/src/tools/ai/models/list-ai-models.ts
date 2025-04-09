// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai.models',
  operation: 'read',
  tags: [],
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.ai.models.list(body);
};

export default { metadata, tool, handler };
