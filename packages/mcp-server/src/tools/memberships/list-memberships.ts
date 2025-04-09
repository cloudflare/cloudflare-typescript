// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_memberships',
  description: 'List memberships of accounts the user can access.',
  inputSchema: {
    type: 'object',
    properties: {
      account: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Account name',
          },
        },
        required: [],
      },
      direction: {
        type: 'string',
        description: 'Direction to order memberships.',
        enum: ['asc', 'desc'],
      },
      name: {
        type: 'string',
        description: 'Account name',
      },
      order: {
        type: 'string',
        description: 'Field to order memberships by.',
        enum: ['id', 'account.name', 'status'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of memberships per page.',
      },
      status: {
        type: 'string',
        description: 'Status of this membership.',
        enum: ['accepted', 'pending', 'rejected'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.memberships.list(body);
};

export default { metadata, tool, handler };
