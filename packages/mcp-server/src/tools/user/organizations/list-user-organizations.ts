// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.organizations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_user_organizations',
  description: 'Lists organizations the user is associated with.',
  inputSchema: {
    type: 'object',
    properties: {
      direction: {
        type: 'string',
        description: 'Direction to order organizations.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description: 'Whether to match all search requirements or at least one (any).',
        enum: ['any', 'all'],
      },
      name: {
        type: 'string',
        description: 'Organization name.',
      },
      order: {
        type: 'string',
        description: 'Field to order organizations by.',
        enum: ['id', 'name', 'status'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of organizations per page.',
      },
      status: {
        type: 'string',
        description: 'Whether the user is a member of the organization or has an inivitation pending.',
        enum: ['member', 'invited'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.user.organizations.list(body);
};

export default { metadata, tool, handler };
