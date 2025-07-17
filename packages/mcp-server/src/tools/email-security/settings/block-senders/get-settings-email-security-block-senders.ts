// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.block_senders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email-security/settings/block_senders/{pattern_id}',
  operationId: 'email_security_get_blocked_sender',
};

export const tool: Tool = {
  name: 'get_settings_email_security_block_senders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a blocked email sender\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          title: 'identifier',\n          description: 'The unique identifier for the allow policy.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        is_regex: {\n          type: 'boolean'\n        },\n        last_modified: {\n          type: 'string',\n          format: 'date-time'\n        },\n        pattern: {\n          type: 'string'\n        },\n        pattern_type: {\n          type: 'string',\n          enum: [            'EMAIL',\n            'DOMAIN',\n            'IP',\n            'UNKNOWN'\n          ]\n        },\n        comments: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'is_regex',\n        'last_modified',\n        'pattern',\n        'pattern_type'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      pattern_id: {
        type: 'integer',
        title: 'identifier',
        description: 'The unique identifier for the allow policy.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'pattern_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pattern_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.emailSecurity.settings.blockSenders.get(pattern_id, body)),
  );
};

export default { metadata, tool, handler };
