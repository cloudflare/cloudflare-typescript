// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pages/projects',
  operationId: 'pages-project-get-projects',
};

export const tool: Tool = {
  name: 'list_pages_projects',
  description: 'Fetch a list of all user projects.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      page: {
        type: 'integer',
        description: 'Which page of projects to fetch.',
      },
      per_page: {
        type: 'integer',
        description: 'How many project to return per page.',
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
  const response = await client.pages.projects.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
