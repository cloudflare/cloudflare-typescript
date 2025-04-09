// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.lifecycle',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_buckets_r2_lifecycle',
  description: 'Set the object lifecycle rules for a bucket',
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
            conditions: {
              type: 'object',
              description: 'Conditions that apply to all transitions of this rule',
              properties: {
                prefix: {
                  type: 'string',
                  description:
                    'Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads',
                },
              },
              required: ['prefix'],
            },
            enabled: {
              type: 'boolean',
              description: 'Whether or not this rule is in effect',
            },
            abortMultipartUploadsTransition: {
              type: 'object',
              description: 'Transition to abort ongoing multipart uploads',
              properties: {
                condition: {
                  type: 'object',
                  description:
                    'Condition for lifecycle transitions to apply after an object reaches an age in seconds',
                  properties: {
                    maxAge: {
                      type: 'integer',
                    },
                    type: {
                      type: 'string',
                      enum: ['Age'],
                    },
                  },
                  required: ['maxAge', 'type'],
                },
              },
              required: [],
            },
            deleteObjectsTransition: {
              type: 'object',
              description: 'Transition to delete objects',
              properties: {
                condition: {
                  anyOf: [
                    {
                      type: 'object',
                      description:
                        'Condition for lifecycle transitions to apply after an object reaches an age in seconds',
                      properties: {
                        maxAge: {
                          type: 'integer',
                        },
                        type: {
                          type: 'string',
                          enum: ['Age'],
                        },
                      },
                      required: ['maxAge', 'type'],
                    },
                    {
                      type: 'object',
                      description: 'Condition for lifecycle transitions to apply on a specific date',
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
                  ],
                  description:
                    'Condition for lifecycle transitions to apply after an object reaches an age in seconds',
                },
              },
              required: [],
            },
            storageClassTransitions: {
              type: 'array',
              description: 'Transitions to change the storage class of objects',
              items: {
                type: 'object',
                properties: {
                  condition: {
                    anyOf: [
                      {
                        type: 'object',
                        description:
                          'Condition for lifecycle transitions to apply after an object reaches an age in seconds',
                        properties: {
                          maxAge: {
                            type: 'integer',
                          },
                          type: {
                            type: 'string',
                            enum: ['Age'],
                          },
                        },
                        required: ['maxAge', 'type'],
                      },
                      {
                        type: 'object',
                        description: 'Condition for lifecycle transitions to apply on a specific date',
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
                    ],
                    description:
                      'Condition for lifecycle transitions to apply after an object reaches an age in seconds',
                  },
                  storageClass: {
                    type: 'string',
                    enum: ['InfrequentAccess'],
                  },
                },
                required: ['condition', 'storageClass'],
              },
            },
          },
          required: ['id', 'conditions', 'enabled'],
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
  return client.r2.buckets.lifecycle.update(bucket_name, body);
};

export default { metadata, tool, handler };
