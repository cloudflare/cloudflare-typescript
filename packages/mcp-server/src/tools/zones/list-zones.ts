// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_zones',
  description:
    'Lists, searches, sorts, and filters your zones. Listing zones across more than 500 accounts\nis currently not allowed.\n',
  inputSchema: {
    type: 'object',
    properties: {
      account: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'An account ID',
          },
          name: {
            type: 'string',
            description:
              'An account Name. Optional filter operators can be provided to extend refine the search:\n  * `equal` (default)\n  * `not_equal`\n  * `starts_with`\n  * `ends_with`\n  * `contains`\n  * `starts_with_case_sensitive`\n  * `ends_with_case_sensitive`\n  * `contains_case_sensitive`\n',
          },
        },
        required: [],
      },
      direction: {
        type: 'string',
        description: 'Direction to order zones.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description: 'Whether to match all search requirements or at least one (any).',
        enum: ['any', 'all'],
      },
      name: {
        type: 'string',
        description:
          'A domain name. Optional filter operators can be provided to extend refine the search:\n  * `equal` (default)\n  * `not_equal`\n  * `starts_with`\n  * `ends_with`\n  * `contains`\n  * `starts_with_case_sensitive`\n  * `ends_with_case_sensitive`\n  * `contains_case_sensitive`\n',
      },
      order: {
        type: 'string',
        description: 'Field to order zones by.',
        enum: ['name', 'status', 'account.id', 'account.name'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of zones per page.',
      },
      status: {
        type: 'string',
        description: 'A zone status',
        enum: ['initializing', 'pending', 'active', 'moved'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zones.list(body);
};

export default { metadata, tool, handler };
