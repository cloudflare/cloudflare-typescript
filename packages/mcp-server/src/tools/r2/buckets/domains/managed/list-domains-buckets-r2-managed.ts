// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.domains.managed',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_domains_buckets_r2_managed',
  description: "Gets state of public access over the bucket's R2-managed (r2.dev) domain.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID',
      },
      bucket_name: {
        type: 'string',
        description: 'Name of the bucket',
      },
      jurisdiction: {
        type: 'string',
        description: 'The bucket jurisdiction',
        enum: ['default', 'eu', 'fedramp'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { bucket_name, ...body } = args;
  return client.r2.buckets.domains.managed.list(bucket_name, body);
};

export default { metadata, tool, handler };
