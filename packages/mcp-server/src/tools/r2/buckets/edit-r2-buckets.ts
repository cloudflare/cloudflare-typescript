// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_r2_buckets',
  description: 'Updates properties of an existing R2 bucket.',
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
      storage_class: {
        type: 'string',
        description: 'Storage class for newly uploaded objects, unless specified otherwise.',
        enum: ['Standard', 'InfrequentAccess'],
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
  return client.r2.buckets.edit(bucket_name, body);
};

export default { metadata, tool, handler };
