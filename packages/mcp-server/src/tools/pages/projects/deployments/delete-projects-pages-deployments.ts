// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.deployments',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}',
  operationId: 'pages-deployment-delete-deployment',
};

export const tool: Tool = {
  name: 'delete_projects_pages_deployments',
  description: 'Delete a deployment.',
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
      deployment_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
    required: ['account_id', 'project_name', 'deployment_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { deployment_id, ...body } = args as any;
  return asTextContentResult((await client.pages.projects.deployments.delete(deployment_id, body)) as object);
};

export default { metadata, tool, handler };
