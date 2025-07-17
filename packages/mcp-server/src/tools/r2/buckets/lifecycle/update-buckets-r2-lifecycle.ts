// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.lifecycle',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/lifecycle',
  operationId: 'r2-put-bucket-lifecycle-configuration',
};

export const tool: Tool = {
  name: 'update_buckets_r2_lifecycle',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet the object lifecycle rules for a bucket.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
            conditions: {
              type: 'object',
              description: 'Conditions that apply to all transitions of this rule.',
              properties: {
                prefix: {
                  type: 'string',
                  description:
                    'Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads.',
                },
              },
              required: ['prefix'],
            },
            enabled: {
              type: 'boolean',
              description: 'Whether or not this rule is in effect.',
            },
            abortMultipartUploadsTransition: {
              type: 'object',
              description: 'Transition to abort ongoing multipart uploads.',
              properties: {
                condition: {
                  type: 'object',
                  description:
                    'Condition for lifecycle transitions to apply after an object reaches an age in seconds.',
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
            },
            deleteObjectsTransition: {
              type: 'object',
              description: 'Transition to delete objects.',
              properties: {
                condition: {
                  anyOf: [
                    {
                      type: 'object',
                      description:
                        'Condition for lifecycle transitions to apply after an object reaches an age in seconds.',
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
                      description: 'Condition for lifecycle transitions to apply on a specific date.',
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
                    'Condition for lifecycle transitions to apply after an object reaches an age in seconds.',
                },
              },
            },
            storageClassTransitions: {
              type: 'array',
              description: 'Transitions to change the storage class of objects.',
              items: {
                type: 'object',
                properties: {
                  condition: {
                    anyOf: [
                      {
                        type: 'object',
                        description:
                          'Condition for lifecycle transitions to apply after an object reaches an age in seconds.',
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
                        description: 'Condition for lifecycle transitions to apply on a specific date.',
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
                      'Condition for lifecycle transitions to apply after an object reaches an age in seconds.',
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
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        enum: ['default', 'eu', 'fedramp'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'bucket_name'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, ...body } = args as any;
  return asTextContentResult((await client.r2.buckets.lifecycle.update(bucket_name, body)) as object);
};

export default { metadata, tool, handler };
