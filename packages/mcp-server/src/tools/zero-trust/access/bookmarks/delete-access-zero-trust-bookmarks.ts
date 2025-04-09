// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.bookmarks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_access_zero_trust_bookmarks',
  description: 'Deletes a Bookmark application.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { bookmark_id, ...body } = args;
  return client.zeroTrust.access.bookmarks.delete(bookmark_id, body);
};

export default { metadata, tool, handler };
