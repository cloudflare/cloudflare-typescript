// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_pipelines',
  description: 'List, filter, and paginate Pipelines in an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      page: {
        type: 'string',
        description: 'Specifies which page to retrieve.',
      },
      per_page: {
        type: 'string',
        description: 'Specifies the number of Pipelines per page.',
      },
      search: {
        type: 'string',
        description: 'Specifies the prefix of Pipeline name to search.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.pipelines.list(body);
};

export default { metadata, tool, handler };
