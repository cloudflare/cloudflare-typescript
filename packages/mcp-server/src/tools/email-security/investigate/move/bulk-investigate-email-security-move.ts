// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate.move',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/email-security/investigate/move',
  operationId: 'email_security_post_bulk_message_move',
};

export const tool: Tool = {
  name: 'bulk_investigate_email_security_move',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMove multiple messages\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          completed_timestamp: {\n            type: 'string',\n            format: 'date-time'\n          },\n          item_count: {\n            type: 'integer'\n          },\n          destination: {\n            type: 'string'\n          },\n          message_id: {\n            type: 'string'\n          },\n          operation: {\n            type: 'string'\n          },\n          recipient: {\n            type: 'string'\n          },\n          status: {\n            type: 'string'\n          }\n        },\n        required: [          'completed_timestamp',\n          'item_count'\n        ]\n      }\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      destination: {
        type: 'string',
        enum: ['Inbox', 'JunkEmail', 'DeletedItems', 'RecoverableItemsDeletions', 'RecoverableItemsPurges'],
      },
      postfix_ids: {
        type: 'array',
        items: {
          type: 'string',
          title: 'postfix_id',
          description: 'The identifier of the message.',
        },
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
  const body = args as any;
  const response = await client.emailSecurity.investigate.move.bulk(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
