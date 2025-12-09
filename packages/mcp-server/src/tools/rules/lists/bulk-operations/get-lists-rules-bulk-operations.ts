// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.bulk_operations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/rules/lists/bulk_operations/{operation_id}',
  operationId: 'lists-get-bulk-operation-status',
};

export const tool: Tool = {
  name: 'get_lists_rules_bulk_operations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets the current status of an asynchronous operation on a list.\n\nThe `status` property can have one of the following values: `pending`, `running`, `completed`, or `failed`. If the status is `failed`, the `error` property will contain a message describing the error.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/bulk_operation_get_response',\n  $defs: {\n    bulk_operation_get_response: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The unique operation ID of the asynchronous action.'\n            },\n            status: {\n              type: 'string',\n              description: 'The current status of the asynchronous operation.',\n              enum: [                'pending',\n                'running'\n              ]\n            }\n          },\n          required: [            'id',\n            'status'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The unique operation ID of the asynchronous action.'\n            },\n            completed: {\n              type: 'string',\n              description: 'The RFC 3339 timestamp of when the operation was completed.'\n            },\n            status: {\n              type: 'string',\n              description: 'The current status of the asynchronous operation.',\n              enum: [                'completed'\n              ]\n            }\n          },\n          required: [            'id',\n            'completed',\n            'status'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The unique operation ID of the asynchronous action.'\n            },\n            completed: {\n              type: 'string',\n              description: 'The RFC 3339 timestamp of when the operation was completed.'\n            },\n            error: {\n              type: 'string',\n              description: 'A message describing the error when the status is `failed`.'\n            },\n            status: {\n              type: 'string',\n              description: 'The current status of the asynchronous operation.',\n              enum: [                'failed'\n              ]\n            }\n          },\n          required: [            'id',\n            'completed',\n            'error',\n            'status'\n          ]\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID for this resource.',
      },
      operation_id: {
        type: 'string',
        description: 'The unique operation ID of the asynchronous action.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'operation_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { operation_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.rules.lists.bulkOperations.get(operation_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
