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
  name: 'create_projects_pages_deployments',
  description:
    'Start a new deployment from production. The repository and account must have already been authorized on the Cloudflare Pages dashboard.',
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
      branch: {
        type: 'string',
        description:
          'The branch to build the new deployment from. The `HEAD` of the branch will be used. If omitted, the production branch will be used by default.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { project_name, ...body } = args;
  return client.pages.projects.deployments.create(project_name, body);
};

export default { metadata, tool, handler };
