// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.message',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'get_requests_cloudforce_one_message',
  description: 'List Request Messages',
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
      after: {
        type: 'string',
        description: 'Retrieve mes  ges created after this time.',
        format: 'date-time',
      },
      before: {
        type: 'string',
        description: 'Retrieve messages created before this time.',
        format: 'date-time',
      },
      sort_by: {
        type: 'string',
        description: 'Field to sort results by.',
      },
      sort_order: {
        type: 'string',
        description: 'Sort order (asc or desc).',
        enum: ['asc', 'desc'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { request_id, ...body } = args as any;
  return client.cloudforceOne.requests.message.get(request_id, body);
};

export default { metadata, tool, handler };
