// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.priority',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}',
  operationId: 'cloudforce-one-priority-update',
};

export const tool: Tool = {
  name: 'update_requests_cloudforce_one_priority',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a Priority Intelligence Requirement\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/item'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    item: {\n      type: 'object',\n      title: 'Request Item',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID.'\n        },\n        content: {\n          type: 'string',\n          description: 'Request content.'\n        },\n        created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        priority: {\n          type: 'string',\n          format: 'date-time'\n        },\n        request: {\n          type: 'string',\n          description: 'Requested information from request.'\n        },\n        summary: {\n          type: 'string',\n          description: 'Brief description of the request.'\n        },\n        tlp: {\n          type: 'string',\n          title: 'TLP',\n          description: 'The CISA defined Traffic Light Protocol (TLP).',\n          enum: [            'clear',\n            'amber',\n            'amber-strict',\n            'green',\n            'red'\n          ]\n        },\n        updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        completed: {\n          type: 'string',\n          format: 'date-time'\n        },\n        message_tokens: {\n          type: 'integer',\n          description: 'Tokens for the request messages.'\n        },\n        readable_id: {\n          type: 'string',\n          title: 'Request Readable ID',\n          description: 'Readable Request ID.'\n        },\n        status: {\n          type: 'string',\n          title: 'Request Status',\n          description: 'Request Status.',\n          enum: [            'open',\n            'accepted',\n            'reported',\n            'approved',\n            'completed',\n            'declined'\n          ]\n        },\n        tokens: {\n          type: 'integer',\n          description: 'Tokens for the request.'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created',\n        'priority',\n        'request',\n        'summary',\n        'tlp',\n        'updated'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      priority_id: {
        type: 'string',
        description: 'UUID.',
      },
      labels: {
        type: 'array',
        title: 'Labels',
        description: 'List of labels.',
        items: {
          $ref: '#/$defs/label',
        },
      },
      priority: {
        type: 'integer',
        description: 'Priority.',
      },
      requirement: {
        type: 'string',
        description: 'Requirement.',
      },
      tlp: {
        type: 'string',
        title: 'TLP',
        description: 'The CISA defined Traffic Light Protocol (TLP).',
        enum: ['clear', 'amber', 'amber-strict', 'green', 'red'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      label: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { priority_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.cloudforceOne.requests.priority.update(priority_id, body)),
  );
};

export default { metadata, tool, handler };
