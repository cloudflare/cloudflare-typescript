// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.bookmarks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/bookmarks/{bookmark_id}',
  operationId: 'access-bookmark-applications-(-deprecated)-get-a-bookmark-application',
};

export const tool: Tool = {
  name: 'get_access_zero_trust_bookmarks',
  description: 'Fetches a single Bookmark application.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      bookmark_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bookmark_id, ...body } = args as any;
  return client.zeroTrust.access.bookmarks.get(bookmark_id, body);
};

export default { metadata, tool, handler };
