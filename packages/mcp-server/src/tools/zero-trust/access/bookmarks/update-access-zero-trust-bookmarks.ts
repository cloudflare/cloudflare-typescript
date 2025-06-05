// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.bookmarks',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/access/bookmarks/{bookmark_id}',
  operationId: 'access-bookmark-applications-(-deprecated)-update-a-bookmark-application',
};

export const tool: Tool = {
  name: 'update_access_zero_trust_bookmarks',
  description: 'Updates a configured Bookmark application.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bookmark_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.access.bookmarks.update(bookmark_id, body));
};

export default { metadata, tool, handler };
