// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.items',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_lists_rules_items',
  description: 'Fetches all the items in the list.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      list_id: {
        type: 'string',
        description: 'The unique ID of the list.',
      },
      cursor: {
        type: 'string',
        description:
          "The pagination cursor. An opaque string token indicating the position from which to continue when requesting the next/previous set of records. Cursor values are provided under `result_info.cursors` in the response. You should make no assumptions about a cursor's content or length.",
      },
      per_page: {
        type: 'integer',
        description:
          'Amount of results to include in each paginated response. A non-negative 32 bit integer.',
      },
      search: {
        type: 'string',
        description:
          'A search query to filter returned items. Its meaning depends on the list type: IP addresses must start with the provided string, hostnames and bulk redirects must contain the string, and ASNs must match the string exactly.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { list_id, ...body } = args;
  return client.rules.lists.items.list(list_id, body);
};

export default { metadata, tool, handler };
