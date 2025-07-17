// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.billing.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/billing/history',
  operationId: 'user-billing-history-(-deprecated)-billing-history-details',
};

export const tool: Tool = {
  name: 'list_billing_user_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAccesses your billing history object.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/billing_history'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    billing_history: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Billing item identifier tag.'\n        },\n        action: {\n          type: 'string',\n          description: 'The billing item action.'\n        },\n        amount: {\n          type: 'number',\n          description: 'The amount associated with this billing item.'\n        },\n        currency: {\n          type: 'string',\n          description: 'The monetary unit in which pricing information is displayed.'\n        },\n        description: {\n          type: 'string',\n          description: 'The billing item description.'\n        },\n        occurred_at: {\n          type: 'string',\n          description: 'When the billing item was created.',\n          format: 'date-time'\n        },\n        type: {\n          type: 'string',\n          description: 'The billing item type.'\n        },\n        zone: {\n          type: 'object',\n          properties: {\n            name: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'action',\n        'amount',\n        'currency',\n        'description',\n        'occurred_at',\n        'type',\n        'zone'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      action: {
        type: 'string',
        description: 'The billing item action.',
      },
      occurred_at: {
        type: 'string',
        description: 'When the billing item was created.',
        format: 'date-time',
      },
      order: {
        type: 'string',
        description: 'Field to order billing history by.',
        enum: ['type', 'occurred_at', 'action'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page.',
      },
      type: {
        type: 'string',
        description: 'The billing item type.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.user.billing.history.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
