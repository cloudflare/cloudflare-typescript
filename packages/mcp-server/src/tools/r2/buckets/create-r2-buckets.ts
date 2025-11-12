// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new R2 bucket.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/bucket',\n  $defs: {\n    bucket: {\n      type: 'object',\n      description: 'A single R2 bucket.',\n      properties: {\n        creation_date: {\n          type: 'string',\n          description: 'Creation timestamp.'\n        },\n        jurisdiction: {\n          type: 'string',\n          description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',\n          enum: [            'default',\n            'eu',\n            'fedramp'\n          ]\n        },\n        location: {\n          type: 'string',\n          description: 'Location of the bucket.',\n          enum: [            'apac',\n            'eeur',\n            'enam',\n            'weur',\n            'wnam',\n            'oc'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the bucket.'\n        },\n        storage_class: {\n          type: 'string',\n          description: 'Storage class for newly uploaded objects, unless specified otherwise.',\n          enum: [            'Standard',\n            'InfrequentAccess'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.r2.buckets.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
