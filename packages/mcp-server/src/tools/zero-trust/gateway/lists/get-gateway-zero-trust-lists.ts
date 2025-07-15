// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.lists',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/lists/{list_id}',
  operationId: 'zero-trust-lists-zero-trust-list-details',
};

export const tool: Tool = {
  name: 'get_gateway_zero_trust_lists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a single Zero Trust list.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/gateway_list'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    gateway_list: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'API Resource UUID tag.'\n        },\n        count: {\n          type: 'number',\n          description: 'The number of items in the list.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the list.'\n        },\n        items: {\n          type: 'array',\n          description: 'The items in the list.',\n          items: {\n            $ref: '#/$defs/gateway_item'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the list.'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of list.',\n          enum: [            'SERIAL',\n            'URL',\n            'DOMAIN',\n            'EMAIL',\n            'IP'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: []\n    },\n    gateway_item: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the list item, if present'\n        },\n        value: {\n          type: 'string',\n          description: 'The value of the item in a list.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      list_id: {
        type: 'string',
        description: 'API Resource UUID tag.',
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
  const { list_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.gateway.lists.get(list_id, body)),
  );
};

export default { metadata, tool, handler };
