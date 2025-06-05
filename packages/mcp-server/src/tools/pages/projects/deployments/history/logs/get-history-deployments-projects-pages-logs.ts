// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.deployments.history.logs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/history/logs',
  operationId: 'pages-deployment-get-deployment-logs',
};

export const tool: Tool = {
  name: 'get_history_deployments_projects_pages_logs',
  description: 'Fetch deployment logs for a project.',
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { deployment_id, ...body } = args as any;
  return asTextContentResult(await client.pages.projects.deployments.history.logs.get(deployment_id, body));
};

export default { metadata, tool, handler };
