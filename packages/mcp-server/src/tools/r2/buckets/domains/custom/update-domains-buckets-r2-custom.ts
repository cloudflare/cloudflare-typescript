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
  name: 'update_domains_buckets_r2_custom',
  description: 'Edit the configuration for a custom domain on an existing R2 bucket.',
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
      enabled: {
        type: 'boolean',
        description: 'Whether to enable public bucket access at the specified custom domain',
      },
      minTLS: {
        type: 'string',
        description:
          'Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to previous value.',
        enum: ['1.0', '1.1', '1.2', '1.3'],
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
  return client.r2.buckets.domains.custom.update(domain, body);
};

export default { metadata, tool, handler };
