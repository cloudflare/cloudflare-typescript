// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests',
  operationId: 'cloudforce-one-request-list',
};

export const tool: Tool = {
  name: 'list_cloudforce_one_requests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Requests\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/list_item'\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    list_item: {\n      type: 'object',\n      title: 'Request List Item',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID.'\n        },\n        created: {\n          type: 'string',\n          description: 'Request creation time.',\n          format: 'date-time'\n        },\n        priority: {\n          type: 'string',\n          title: 'Request Priority',\n          enum: [            'routine',\n            'high',\n            'urgent'\n          ]\n        },\n        request: {\n          type: 'string',\n          description: 'Requested information from request.'\n        },\n        summary: {\n          type: 'string',\n          description: 'Brief description of the request.'\n        },\n        tlp: {\n          type: 'string',\n          title: 'TLP',\n          description: 'The CISA defined Traffic Light Protocol (TLP).',\n          enum: [            'clear',\n            'amber',\n            'amber-strict',\n            'green',\n            'red'\n          ]\n        },\n        updated: {\n          type: 'string',\n          description: 'Request last updated time.',\n          format: 'date-time'\n        },\n        completed: {\n          type: 'string',\n          description: 'Request completion time.',\n          format: 'date-time'\n        },\n        message_tokens: {\n          type: 'integer',\n          description: 'Tokens for the request messages.'\n        },\n        readable_id: {\n          type: 'string',\n          title: 'Request Readable ID',\n          description: 'Readable Request ID.'\n        },\n        status: {\n          type: 'string',\n          title: 'Request Status',\n          description: 'Request Status.',\n          enum: [            'open',\n            'accepted',\n            'reported',\n            'approved',\n            'completed',\n            'declined'\n          ]\n        },\n        tokens: {\n          type: 'integer',\n          description: 'Tokens for the request.'\n        }\n      },\n      required: [        'id',\n        'created',\n        'priority',\n        'request',\n        'summary',\n        'tlp',\n        'updated'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      page: {
        type: 'integer',
        description: 'Page number of results.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of results per page.',
      },
      completed_after: {
        type: 'string',
        description: 'Retrieve requests completed after this time.',
        format: 'date-time',
      },
      completed_before: {
        type: 'string',
        description: 'Retrieve requests completed before this time.',
        format: 'date-time',
      },
      created_after: {
        type: 'string',
        description: 'Retrieve requests created after this time.',
        format: 'date-time',
      },
      created_before: {
        type: 'string',
        description: 'Retrieve requests created before this time.',
        format: 'date-time',
      },
      request_type: {
        type: 'string',
        description: 'Requested information from request.',
      },
      sort_by: {
        type: 'string',
        description: 'Field to sort results by.',
      },
      sort_order: {
        type: 'string',
        description: 'Sort order (asc or desc).',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'string',
        title: 'Request Status',
        description: 'Request Status.',
        enum: ['open', 'accepted', 'reported', 'approved', 'completed', 'declined'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'page', 'per_page'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.cloudforceOne.requests.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
