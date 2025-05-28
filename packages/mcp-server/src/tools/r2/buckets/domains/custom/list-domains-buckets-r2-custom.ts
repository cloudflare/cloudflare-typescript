// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.domains.custom',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom',
  operationId: 'r2-list-custom-domains',
};

export const tool: Tool = {
  name: 'list_domains_buckets_r2_custom',
  description: 'Gets a list of all custom domains registered with an existing R2 bucket.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      bucket_name: {
        type: 'string',
        description: 'Name of the bucket.',
      },
      jurisdiction: {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        enum: ['default', 'eu', 'fedramp'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, ...body } = args as any;
  return client.r2.buckets.domains.custom.list(bucket_name, body);
};

export default { metadata, tool, handler };
