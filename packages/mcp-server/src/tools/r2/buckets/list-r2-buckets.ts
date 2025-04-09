// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_r2_buckets',
  description: 'Lists all R2 buckets on your account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID',
      },
      cursor: {
        type: 'string',
        description:
          'Pagination cursor received during the last List Buckets call. R2 buckets are paginated using cursors instead of page numbers.',
      },
      direction: {
        type: 'string',
        description: 'Direction to order buckets',
        enum: ['asc', 'desc'],
      },
      name_contains: {
        type: 'string',
        description:
          'Bucket names to filter by. Only buckets with this phrase in their name will be returned.',
      },
      order: {
        type: 'string',
        description: 'Field to order buckets by',
        enum: ['name'],
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of buckets to return in a single call',
      },
      start_after: {
        type: 'string',
        description: 'Bucket name to start searching after. Buckets are ordered lexicographically.',
      },
      jurisdiction: {
        type: 'string',
        description: 'Lists buckets in the provided jurisdiction',
        enum: ['default', 'eu', 'fedramp'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.r2.buckets.list(body);
};

export default { metadata, tool, handler };
