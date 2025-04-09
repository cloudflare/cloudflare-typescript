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
  name: 'get_projects_pages_deployments',
  description: 'Fetch information about a deployment.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { deployment_id, ...body } = args;
  return client.pages.projects.deployments.get(deployment_id, body);
};

export default { metadata, tool, handler };
