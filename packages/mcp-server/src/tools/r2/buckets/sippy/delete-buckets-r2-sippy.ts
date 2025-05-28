// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.sippy',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/sippy',
  operationId: 'r2-delete-bucket-sippy-config',
};

export const tool: Tool = {
  name: 'delete_buckets_r2_sippy',
  description: 'Disables Sippy on this bucket.',
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
  return client.r2.buckets.sippy.delete(bucket_name, body);
};

export default { metadata, tool, handler };
