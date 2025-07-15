// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.lifecycle',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/lifecycle',
  operationId: 'r2-get-bucket-lifecycle-configuration',
};

export const tool: Tool = {
  name: 'get_buckets_r2_lifecycle',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet object lifecycle rules for a bucket.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        rules: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for this rule.'\n              },\n              conditions: {\n                type: 'object',\n                description: 'Conditions that apply to all transitions of this rule.',\n                properties: {\n                  prefix: {\n                    type: 'string',\n                    description: 'Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads.'\n                  }\n                },\n                required: [                  'prefix'\n                ]\n              },\n              enabled: {\n                type: 'boolean',\n                description: 'Whether or not this rule is in effect.'\n              },\n              abortMultipartUploadsTransition: {\n                type: 'object',\n                description: 'Transition to abort ongoing multipart uploads.',\n                properties: {\n                  condition: {\n                    type: 'object',\n                    description: 'Condition for lifecycle transitions to apply after an object reaches an age in seconds.',\n                    properties: {\n                      maxAge: {\n                        type: 'integer'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'Age'\n                        ]\n                      }\n                    },\n                    required: [                      'maxAge',\n                      'type'\n                    ]\n                  }\n                },\n                required: []\n              },\n              deleteObjectsTransition: {\n                type: 'object',\n                description: 'Transition to delete objects.',\n                properties: {\n                  condition: {\n                    anyOf: [                      {\n                        type: 'object',\n                        description: 'Condition for lifecycle transitions to apply after an object reaches an age in seconds.',\n                        properties: {\n                          maxAge: {\n                            type: 'integer'\n                          },\n                          type: {\n                            type: 'string',\n                            enum: [                              'Age'\n                            ]\n                          }\n                        },\n                        required: [                          'maxAge',\n                          'type'\n                        ]\n                      },\n                      {\n                        type: 'object',\n                        description: 'Condition for lifecycle transitions to apply on a specific date.',\n                        properties: {\n                          date: {\n                            type: 'string',\n                            format: 'date'\n                          },\n                          type: {\n                            type: 'string',\n                            enum: [                              'Date'\n                            ]\n                          }\n                        },\n                        required: [                          'date',\n                          'type'\n                        ]\n                      }\n                    ],\n                    description: 'Condition for lifecycle transitions to apply after an object reaches an age in seconds.'\n                  }\n                },\n                required: []\n              },\n              storageClassTransitions: {\n                type: 'array',\n                description: 'Transitions to change the storage class of objects.',\n                items: {\n                  type: 'object',\n                  properties: {\n                    condition: {\n                      anyOf: [                        {\n                          type: 'object',\n                          description: 'Condition for lifecycle transitions to apply after an object reaches an age in seconds.',\n                          properties: {\n                            maxAge: {\n                              type: 'integer'\n                            },\n                            type: {\n                              type: 'string',\n                              enum: [                                'Age'\n                              ]\n                            }\n                          },\n                          required: [                            'maxAge',\n                            'type'\n                          ]\n                        },\n                        {\n                          type: 'object',\n                          description: 'Condition for lifecycle transitions to apply on a specific date.',\n                          properties: {\n                            date: {\n                              type: 'string',\n                              format: 'date'\n                            },\n                            type: {\n                              type: 'string',\n                              enum: [                                'Date'\n                              ]\n                            }\n                          },\n                          required: [                            'date',\n                            'type'\n                          ]\n                        }\n                      ],\n                      description: 'Condition for lifecycle transitions to apply after an object reaches an age in seconds.'\n                    },\n                    storageClass: {\n                      type: 'string',\n                      enum: [                        'InfrequentAccess'\n                      ]\n                    }\n                  },\n                  required: [                    'condition',\n                    'storageClass'\n                  ]\n                }\n              }\n            },\n            required: [              'id',\n              'conditions',\n              'enabled'\n            ]\n          }\n        }\n      },\n      required: []\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.r2.buckets.lifecycle.get(bucket_name, body)),
  );
};

export default { metadata, tool, handler };
