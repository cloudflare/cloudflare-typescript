// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.locks',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/lock',
  operationId: 'r2-put-bucket-lock-configuration',
};

export const tool: Tool = {
  name: 'update_buckets_r2_locks',
  description: 'Set lock rules for a bucket.',
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
      rules: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for this rule.',
            },
            condition: {
              anyOf: [
                {
                  type: 'object',
                  description: 'Condition to apply a lock rule to an object for how long in seconds.',
                  properties: {
                    maxAgeSeconds: {
                      type: 'integer',
                    },
                    type: {
                      type: 'string',
                      enum: ['Age'],
                    },
                  },
                  required: ['maxAgeSeconds', 'type'],
                },
                {
                  type: 'object',
                  description: 'Condition to apply a lock rule to an object until a specific date.',
                  properties: {
                    date: {
                      type: 'string',
                      format: 'date-time',
                    },
                    type: {
                      type: 'string',
                      enum: ['Date'],
                    },
                  },
                  required: ['date', 'type'],
                },
                {
                  type: 'object',
                  description: 'Condition to apply a lock rule indefinitely.',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['Indefinite'],
                    },
                  },
                  required: ['type'],
                },
              ],
              description: 'Condition to apply a lock rule to an object for how long in seconds.',
            },
            enabled: {
              type: 'boolean',
              description: 'Whether or not this rule is in effect.',
            },
            prefix: {
              type: 'string',
              description:
                'Rule will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads.',
            },
          },
          required: ['id', 'condition', 'enabled'],
        },
      },
      jurisdiction: {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        enum: ['default', 'eu', 'fedramp'],
      },
    },
    required: ['account_id', 'bucket_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, ...body } = args as any;
  return asTextContentResult((await client.r2.buckets.locks.update(bucket_name, body)) as object);
};

export default { metadata, tool, handler };
