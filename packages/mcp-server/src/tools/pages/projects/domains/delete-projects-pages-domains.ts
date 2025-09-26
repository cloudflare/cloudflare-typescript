// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.domains',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}',
  operationId: 'pages-domains-delete-domain',
};

export const tool: Tool = {
  name: 'delete_projects_pages_domains',
  description: "Delete a Pages project's domain.",
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
    required: ['account_id', 'project_name', 'domain_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain_name, ...body } = args as any;
  return asTextContentResult((await client.pages.projects.domains.delete(domain_name, body)) as object);
};

export default { metadata, tool, handler };
