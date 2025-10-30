// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.deployments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/deployments',
  operationId: 'pages-deployment-get-deployments',
};

export const tool: Tool = {
  name: 'list_projects_pages_deployments',
  description: 'Fetch a list of project deployments.',
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
      env: {
        type: 'string',
        description: 'What type of deployments to fetch.',
        enum: ['production', 'preview'],
      },
    },
    required: ['account_id', 'project_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { project_name, ...body } = args as any;
  const response = await client.pages.projects.deployments.list(project_name, body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
