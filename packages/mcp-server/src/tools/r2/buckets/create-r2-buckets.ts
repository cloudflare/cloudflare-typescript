// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/r2/buckets',
  operationId: 'r2-create-bucket',
};

export const tool: Tool = {
  name: 'create_r2_buckets',
  description: 'Creates a new R2 bucket.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      name: {
        type: 'string',
        description: 'Name of the bucket.',
      },
      locationHint: {
        type: 'string',
        description: 'Location of the bucket.',
        enum: ['apac', 'eeur', 'enam', 'weur', 'wnam', 'oc'],
      },
      storageClass: {
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
  const body = args as any;
  return client.r2.buckets.create(body);
};

export default { metadata, tool, handler };
