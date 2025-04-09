// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.domains',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_projects_pages_domains',
  description: 'Fetch a single domain.',
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
      domain_name: {
        type: 'string',
        description: 'Name of the domain.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { domain_name, ...body } = args;
  return client.pages.projects.domains.get(domain_name, body);
};

export default { metadata, tool, handler };
