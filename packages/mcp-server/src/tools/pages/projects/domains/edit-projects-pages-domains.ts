// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.domains',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}',
  operationId: 'pages-domains-patch-domain',
};

export const tool: Tool = {
  name: 'edit_projects_pages_domains',
  description: 'Retry the validation status of a single domain.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain_name, ...body } = args as any;
  return asTextContentResult(await client.pages.projects.domains.edit(domain_name, body));
};

export default { metadata, tool, handler };
