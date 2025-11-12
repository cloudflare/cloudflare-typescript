// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.lists',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/gateway/lists',
  operationId: 'zero-trust-lists-create-zero-trust-list',
};

export const tool: Tool = {
  name: 'create_gateway_zero_trust_lists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new Zero Trust list.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/list_create_response',\n  $defs: {\n    list_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identify the API resource with a UUID.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Provide the list description.'\n        },\n        items: {\n          type: 'array',\n          description: 'Provide the list items.',\n          items: {\n            $ref: '#/$defs/gateway_item'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Specify the list name.'\n        },\n        type: {\n          type: 'string',\n          description: 'Specify the list type.',\n          enum: [            'SERIAL',\n            'URL',\n            'DOMAIN',\n            'EMAIL',\n            'IP'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    },\n    gateway_item: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Provide the list item description (optional).'\n        },\n        value: {\n          type: 'string',\n          description: 'Specify the item value.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Specify the list name.',
      },
      type: {
        type: 'string',
        description: 'Specify the list type.',
        enum: ['SERIAL', 'URL', 'DOMAIN', 'EMAIL', 'IP'],
      },
      description: {
        type: 'string',
        description: 'Provide the list description.',
      },
      items: {
        type: 'array',
        description: 'Add items to the list.',
        items: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
              description: 'Provide the list item description (optional).',
            },
            value: {
              type: 'string',
              description: 'Specify the item value.',
            },
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'name', 'type'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.gateway.lists.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
