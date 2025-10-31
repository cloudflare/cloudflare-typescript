// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.locks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/lock',
  operationId: 'r2-get-bucket-lock-configuration',
};

export const tool: Tool = {
  name: 'get_buckets_r2_locks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet lock rules for a bucket.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        rules: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for this rule.'\n              },\n              condition: {\n                anyOf: [                  {\n                    type: 'object',\n                    description: 'Condition to apply a lock rule to an object for how long in seconds.',\n                    properties: {\n                      maxAgeSeconds: {\n                        type: 'integer'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'Age'\n                        ]\n                      }\n                    },\n                    required: [                      'maxAgeSeconds',\n                      'type'\n                    ]\n                  },\n                  {\n                    type: 'object',\n                    description: 'Condition to apply a lock rule to an object until a specific date.',\n                    properties: {\n                      date: {\n                        type: 'string',\n                        format: 'date'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'Date'\n                        ]\n                      }\n                    },\n                    required: [                      'date',\n                      'type'\n                    ]\n                  },\n                  {\n                    type: 'object',\n                    description: 'Condition to apply a lock rule indefinitely.',\n                    properties: {\n                      type: {\n                        type: 'string',\n                        enum: [                          'Indefinite'\n                        ]\n                      }\n                    },\n                    required: [                      'type'\n                    ]\n                  }\n                ],\n                description: 'Condition to apply a lock rule to an object for how long in seconds.'\n              },\n              enabled: {\n                type: 'boolean',\n                description: 'Whether or not this rule is in effect.'\n              },\n              prefix: {\n                type: 'string',\n                description: 'Rule will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads.'\n              }\n            },\n            required: [              'id',\n              'condition',\n              'enabled'\n            ]\n          }\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
    required: ['account_id', 'bucket_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.r2.buckets.locks.get(bucket_name, body)),
  );
};

export default { metadata, tool, handler };
