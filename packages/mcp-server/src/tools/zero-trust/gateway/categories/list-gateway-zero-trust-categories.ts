// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/categories',
  operationId: 'zero-trust-gateway-categories-list-categories',
};

export const tool: Tool = {
  name: 'list_gateway_zero_trust_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a list of all categories.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/category'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    category: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'The identifier for this category. There is only one category per ID.'\n        },\n        beta: {\n          type: 'boolean',\n          description: 'True if the category is in beta and subject to change.'\n        },\n        class: {\n          type: 'string',\n          description: 'Which account types are allowed to create policies based on this category. `blocked` categories are blocked unconditionally for all accounts. `removalPending` categories can be removed from policies but not added. `noBlock` categories cannot be blocked.',\n          enum: [            'free',\n            'premium',\n            'blocked',\n            'removalPending',\n            'noBlock'\n          ]\n        },\n        description: {\n          type: 'string',\n          description: 'A short summary of domains in the category.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the category.'\n        },\n        subcategories: {\n          type: 'array',\n          description: 'All subcategories for this category.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'The identifier for this category. There is only one category per ID.'\n              },\n              beta: {\n                type: 'boolean',\n                description: 'True if the category is in beta and subject to change.'\n              },\n              class: {\n                type: 'string',\n                description: 'Which account types are allowed to create policies based on this category. `blocked` categories are blocked unconditionally for all accounts. `removalPending` categories can be removed from policies but not added. `noBlock` categories cannot be blocked.',\n                enum: [                  'free',\n                  'premium',\n                  'blocked',\n                  'removalPending',\n                  'noBlock'\n                ]\n              },\n              description: {\n                type: 'string',\n                description: 'A short summary of domains in the category.'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the category.'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
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
  const body = args as any;
  const response = await client.zeroTrust.gateway.categories.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
