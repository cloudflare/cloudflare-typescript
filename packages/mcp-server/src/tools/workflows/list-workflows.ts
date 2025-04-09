// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_workflows',
  description: 'List all Workflows',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      page: {
        type: 'number',
      },
      per_page: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.workflows.list(body);
};

export default { metadata, tool, handler };
