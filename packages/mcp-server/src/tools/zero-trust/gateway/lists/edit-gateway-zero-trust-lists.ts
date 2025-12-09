// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.lists',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/gateway/lists/{list_id}',
  operationId: 'zero-trust-lists-patch-zero-trust-list',
};

export const tool: Tool = {
  name: 'edit_gateway_zero_trust_lists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAppends or removes an item from a configured Zero Trust list.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/gateway_list',\n  $defs: {\n    gateway_list: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identify the API resource with a UUID.'\n        },\n        count: {\n          type: 'number',\n          description: 'Indicate the number of items in the list.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Provide the list description.'\n        },\n        items: {\n          type: 'array',\n          description: 'Provide the list items.',\n          items: {\n            $ref: '#/$defs/gateway_item'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Specify the list name.'\n        },\n        type: {\n          type: 'string',\n          description: 'Specify the list type.',\n          enum: [            'SERIAL',\n            'URL',\n            'DOMAIN',\n            'EMAIL',\n            'IP'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    },\n    gateway_item: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Provide the list item description (optional).'\n        },\n        value: {\n          type: 'string',\n          description: 'Specify the item value.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      list_id: {
        type: 'string',
        description: 'Identify the API resource with a UUID.',
      },
      append: {
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
      remove: {
        type: 'array',
        description: 'Lists of item values you want to remove.',
        items: {
          type: 'string',
          description: 'Specify the item value.',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'list_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { list_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.gateway.lists.edit(list_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
