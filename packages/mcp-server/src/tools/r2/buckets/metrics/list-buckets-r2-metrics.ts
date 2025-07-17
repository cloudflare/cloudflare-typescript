// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/r2/metrics',
  operationId: 'r2-get-account-level-metrics',
};

export const tool: Tool = {
  name: 'list_buckets_r2_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Storage/Object Count Metrics across all buckets in your account. Note that Account-Level Metrics may not immediately reflect the latest data.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object',\n      description: 'Metrics based on the class they belong to.',\n      properties: {\n        infrequentAccess: {\n          type: 'object',\n          description: 'Metrics based on what state they are in(uploaded or published).',\n          properties: {\n            published: {\n              type: 'object',\n              description: 'Metrics on number of objects/amount of storage used.',\n              properties: {\n                metadataSize: {\n                  type: 'number',\n                  description: 'Amount of.'\n                },\n                objects: {\n                  type: 'number',\n                  description: 'Number of objects stored.'\n                },\n                payloadSize: {\n                  type: 'number',\n                  description: 'Amount of storage used by object data.'\n                }\n              }\n            },\n            uploaded: {\n              type: 'object',\n              description: 'Metrics on number of objects/amount of storage used.',\n              properties: {\n                metadataSize: {\n                  type: 'number',\n                  description: 'Amount of.'\n                },\n                objects: {\n                  type: 'number',\n                  description: 'Number of objects stored.'\n                },\n                payloadSize: {\n                  type: 'number',\n                  description: 'Amount of storage used by object data.'\n                }\n              }\n            }\n          }\n        },\n        standard: {\n          type: 'object',\n          description: 'Metrics based on what state they are in(uploaded or published).',\n          properties: {\n            published: {\n              type: 'object',\n              description: 'Metrics on number of objects/amount of storage used.',\n              properties: {\n                metadataSize: {\n                  type: 'number',\n                  description: 'Amount of.'\n                },\n                objects: {\n                  type: 'number',\n                  description: 'Number of objects stored.'\n                },\n                payloadSize: {\n                  type: 'number',\n                  description: 'Amount of storage used by object data.'\n                }\n              }\n            },\n            uploaded: {\n              type: 'object',\n              description: 'Metrics on number of objects/amount of storage used.',\n              properties: {\n                metadataSize: {\n                  type: 'number',\n                  description: 'Amount of.'\n                },\n                objects: {\n                  type: 'number',\n                  description: 'Number of objects stored.'\n                },\n                payloadSize: {\n                  type: 'number',\n                  description: 'Amount of storage used by object data.'\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.r2.buckets.metrics.list(body)));
};

export default { metadata, tool, handler };
