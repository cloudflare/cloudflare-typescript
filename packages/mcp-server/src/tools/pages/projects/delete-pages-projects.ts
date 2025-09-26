// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}',
  operationId: 'pages-project-delete-project',
};

export const tool: Tool = {
  name: 'delete_pages_projects',
  description: 'Delete a project by name.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      project_name: {
        type: 'string',
        description: 'Name of the project.',
      },
    },
    required: ['account_id', 'project_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { project_name, ...body } = args as any;
  return asTextContentResult((await client.pages.projects.delete(project_name, body)) as object);
};

export default { metadata, tool, handler };
