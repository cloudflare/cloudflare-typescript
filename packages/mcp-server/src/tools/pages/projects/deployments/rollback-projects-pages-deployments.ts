// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.deployments',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'rollback_projects_pages_deployments',
  description:
    'Rollback the production deployment to a previous deployment. You can only rollback to succesful builds on production.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { deployment_id, ...body } = args;
  return client.pages.projects.deployments.rollback(deployment_id, body);
};

export default { metadata, tool, handler };
