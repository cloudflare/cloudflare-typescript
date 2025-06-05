// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pipelines',
  operationId: 'getV4AccountsByAccount_idPipelines',
};

export const tool: Tool = {
  name: 'list_pipelines',
  description: 'List, filter, and paginate pipelines in an account.',
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
        description: 'Specifies the number of pipelines per page.',
      },
      search: {
        type: 'string',
        description: 'Specifies the prefix of pipeline name to search.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.pipelines.list(body));
};

export default { metadata, tool, handler };
