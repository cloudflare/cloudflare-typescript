// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.allow_policies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email-security/settings/allow_policies',
  operationId: 'email_security_list_allow_policies',
};

export const tool: Tool = {
  name: 'list_settings_email_security_allow_policies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists, searches, and sorts an account’s email allow policies.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer',\n            title: 'identifier',\n            description: 'The unique identifier for the allow policy.'\n          },\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          is_acceptable_sender: {\n            type: 'boolean',\n            description: 'Messages from this sender will be exempted from Spam, Spoof and Bulk dispositions.\\nNote: This will not exempt messages with Malicious or Suspicious dispositions.'\n          },\n          is_exempt_recipient: {\n            type: 'boolean',\n            description: 'Messages to this recipient will bypass all detections.'\n          },\n          is_regex: {\n            type: 'boolean'\n          },\n          is_trusted_sender: {\n            type: 'boolean',\n            description: 'Messages from this sender will bypass all detections and link following.'\n          },\n          last_modified: {\n            type: 'string',\n            format: 'date-time'\n          },\n          pattern: {\n            type: 'string'\n          },\n          pattern_type: {\n            type: 'string',\n            enum: [              'EMAIL',\n              'DOMAIN',\n              'IP',\n              'UNKNOWN'\n            ]\n          },\n          verify_sender: {\n            type: 'boolean',\n            description: 'Enforce DMARC, SPF or DKIM authentication.\\nWhen on, Email Security only honors policies that pass authentication.'\n          },\n          comments: {\n            type: 'string'\n          },\n          is_recipient: {\n            type: 'boolean'\n          },\n          is_sender: {\n            type: 'boolean'\n          },\n          is_spoof: {\n            type: 'boolean'\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'is_acceptable_sender',\n          'is_exempt_recipient',\n          'is_regex',\n          'is_trusted_sender',\n          'last_modified',\n          'pattern',\n          'pattern_type',\n          'verify_sender'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'Total results available without any search parameters'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'result_info',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      direction: {
        type: 'string',
        description: 'The sorting direction.',
        enum: ['asc', 'desc'],
      },
      is_acceptable_sender: {
        type: 'boolean',
      },
      is_exempt_recipient: {
        type: 'boolean',
      },
      is_recipient: {
        type: 'boolean',
      },
      is_sender: {
        type: 'boolean',
      },
      is_spoof: {
        type: 'boolean',
      },
      is_trusted_sender: {
        type: 'boolean',
      },
      order: {
        type: 'string',
        description: 'The field to sort by.',
        enum: ['pattern', 'created_at'],
      },
      page: {
        type: 'integer',
        description: 'The page number of paginated results.',
      },
      pattern_type: {
        type: 'string',
        enum: ['EMAIL', 'DOMAIN', 'IP', 'UNKNOWN'],
      },
      per_page: {
        type: 'integer',
        description: 'The number of results per page.',
      },
      search: {
        type: 'string',
        description:
          'Allows searching in multiple properties of a record simultaneously.\nThis parameter is intended for human users, not automation. Its exact\nbehavior is intentionally left unspecified and is subject to change\nin the future.',
      },
      verify_sender: {
        type: 'boolean',
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
  const response = await client.emailSecurity.settings.allowPolicies.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
