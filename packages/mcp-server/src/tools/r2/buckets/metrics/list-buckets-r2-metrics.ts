// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Storage/Object Count Metrics across all buckets in your account. Note that Account-Level Metrics may not immediately reflect the latest data.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/metric_list_response',\n  $defs: {\n    metric_list_response: {\n      type: 'object',\n      description: 'Metrics based on the class they belong to.',\n      properties: {\n        infrequentAccess: {\n          type: 'object',\n          description: 'Metrics based on what state they are in(uploaded or published).',\n          properties: {\n            published: {\n              type: 'object',\n              description: 'Metrics on number of objects/amount of storage used.',\n              properties: {\n                metadataSize: {\n                  type: 'number',\n                  description: 'Amount of.'\n                },\n                objects: {\n                  type: 'number',\n                  description: 'Number of objects stored.'\n                },\n                payloadSize: {\n                  type: 'number',\n                  description: 'Amount of storage used by object data.'\n                }\n              }\n            },\n            uploaded: {\n              type: 'object',\n              description: 'Metrics on number of objects/amount of storage used.',\n              properties: {\n                metadataSize: {\n                  type: 'number',\n                  description: 'Amount of.'\n                },\n                objects: {\n                  type: 'number',\n                  description: 'Number of objects stored.'\n                },\n                payloadSize: {\n                  type: 'number',\n                  description: 'Amount of storage used by object data.'\n                }\n              }\n            }\n          }\n        },\n        standard: {\n          type: 'object',\n          description: 'Metrics based on what state they are in(uploaded or published).',\n          properties: {\n            published: {\n              type: 'object',\n              description: 'Metrics on number of objects/amount of storage used.',\n              properties: {\n                metadataSize: {\n                  type: 'number',\n                  description: 'Amount of.'\n                },\n                objects: {\n                  type: 'number',\n                  description: 'Number of objects stored.'\n                },\n                payloadSize: {\n                  type: 'number',\n                  description: 'Amount of storage used by object data.'\n                }\n              }\n            },\n            uploaded: {\n              type: 'object',\n              description: 'Metrics on number of objects/amount of storage used.',\n              properties: {\n                metadataSize: {\n                  type: 'number',\n                  description: 'Amount of.'\n                },\n                objects: {\n                  type: 'number',\n                  description: 'Number of objects stored.'\n                },\n                payloadSize: {\n                  type: 'number',\n                  description: 'Amount of storage used by object data.'\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.r2.buckets.metrics.list(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
