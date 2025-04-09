// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.locks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_buckets_r2_locks',
  description: 'Set lock rules for a bucket',
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
      rules: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for this rule',
            },
            condition: {
              anyOf: [
                {
                  type: 'object',
                  description: 'Condition to apply a lock rule to an object for how long in seconds',
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
                  description: 'Condition to apply a lock rule to an object until a specific date',
                  properties: {
                    date: {
                      type: 'string',
                      format: 'date',
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
                  description: 'Condition to apply a lock rule indefinitely',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['Indefinite'],
                    },
                  },
                  required: ['type'],
                },
              ],
              description: 'Condition to apply a lock rule to an object for how long in seconds',
            },
            enabled: {
              type: 'boolean',
              description: 'Whether or not this rule is in effect',
            },
            prefix: {
              type: 'string',
              description:
                'Rule will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads',
            },
          },
          required: ['id', 'condition', 'enabled'],
        },
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
  return client.r2.buckets.locks.update(bucket_name, body);
};

export default { metadata, tool, handler };
