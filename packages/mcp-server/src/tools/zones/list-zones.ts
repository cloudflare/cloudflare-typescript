// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones',
  operationId: 'zones-get',
};

export const tool: Tool = {
  name: 'list_zones',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists, searches, sorts, and filters your zones. Listing zones across more than 500 accounts\nis currently not allowed.\n",
  inputSchema: {
    type: 'object',
    properties: {
      account: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Filter by an account ID.',
          },
          name: {
            type: 'string',
            description:
              'An account Name. Optional filter operators can be provided to extend refine the search:\n  * `equal` (default)\n  * `not_equal`\n  * `starts_with`\n  * `ends_with`\n  * `contains`\n  * `starts_with_case_sensitive`\n  * `ends_with_case_sensitive`\n  * `contains_case_sensitive`\n',
          },
        },
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
        enum: ['name', 'status', 'account.id', 'account.name', 'plan.id'],
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
        description: 'Specify a zone status to filter by.',
        enum: ['initializing', 'pending', 'active', 'moved'],
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zones.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
