// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'list_cloudforce_one_requests',
  description: 'List Requests',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      page: {
        type: 'integer',
        description: 'Page number of results',
      },
      per_page: {
        type: 'integer',
        description: 'Number of results per page',
      },
      completed_after: {
        type: 'string',
        description: 'Retrieve requests completed after this time',
        format: 'date-time',
      },
      completed_before: {
        type: 'string',
        description: 'Retrieve requests completed before this time',
        format: 'date-time',
      },
      created_after: {
        type: 'string',
        description: 'Retrieve requests created after this time',
        format: 'date-time',
      },
      created_before: {
        type: 'string',
        description: 'Retrieve requests created before this time',
        format: 'date-time',
      },
      request_type: {
        type: 'string',
        description: 'Requested information from request',
      },
      sort_by: {
        type: 'string',
        description: 'Field to sort results by',
      },
      sort_order: {
        type: 'string',
        description: 'Sort order (asc or desc)',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'string',
        title: 'Request Status',
        description: 'Request Status',
        enum: ['open', 'accepted', 'reported', 'approved', 'completed', 'declined'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { account_identifier, ...body } = args;
  return client.cloudforceOne.requests.list(account_identifier, body);
};

export default { metadata, tool, handler };
