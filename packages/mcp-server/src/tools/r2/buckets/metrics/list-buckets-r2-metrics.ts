// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.metrics',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_buckets_r2_metrics',
  description:
    'Get Storage/Object Count Metrics across all buckets in your account. Note that Account-Level Metrics may not immediately reflect the latest data.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.r2.buckets.metrics.list(body);
};

export default { metadata, tool, handler };
