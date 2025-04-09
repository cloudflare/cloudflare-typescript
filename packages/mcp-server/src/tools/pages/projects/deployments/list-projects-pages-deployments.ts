// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.deployments',
  operation: 'read',
  tags: [],
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { project_name, ...body } = args;
  return client.pages.projects.deployments.list(project_name, body);
};

export default { metadata, tool, handler };
