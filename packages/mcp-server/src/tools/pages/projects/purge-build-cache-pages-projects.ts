// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/purge_build_cache',
  operationId: 'pages-purge-build-cache',
};

export const tool: Tool = {
  name: 'purge_build_cache_pages_projects',
  description: 'Purge all cached build artifacts for a Pages project',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { project_name, ...body } = args as any;
  return asTextContentResult((await client.pages.projects.purgeBuildCache(project_name, body)) as object);
};

export default { metadata, tool, handler };
