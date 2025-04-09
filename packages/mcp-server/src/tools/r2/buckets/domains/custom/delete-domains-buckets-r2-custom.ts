// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.domains.custom',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_domains_buckets_r2_custom',
  description: 'Remove custom domain registration from an existing R2 bucket',
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
      domain: {
        type: 'string',
        description: 'Name of the custom domain',
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
  const { domain, ...body } = args;
  return client.r2.buckets.domains.custom.delete(domain, body);
};

export default { metadata, tool, handler };
