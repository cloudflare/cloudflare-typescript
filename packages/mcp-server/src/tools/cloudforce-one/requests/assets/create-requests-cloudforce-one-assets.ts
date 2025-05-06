// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.assets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_requests_cloudforce_one_assets',
  description: 'List Request Assets',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      request_id: {
        type: 'string',
        description: 'UUID.',
      },
      page: {
        type: 'integer',
        description: 'Page number of results.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of results per page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { request_id, ...body } = args as any;
  return client.cloudforceOne.requests.assets.create(request_id, body);
};

export default { metadata, tool, handler };
