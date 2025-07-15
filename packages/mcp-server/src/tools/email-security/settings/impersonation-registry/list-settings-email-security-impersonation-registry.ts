// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.impersonation_registry',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email-security/settings/impersonation_registry',
  operationId: 'email_security_list_display_names',
};

export const tool: Tool = {
  name: 'list_settings_email_security_impersonation_registry',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists, searches, and sorts entries in the impersonation registry.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer',\n            title: 'identifier'\n          },\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          email: {\n            type: 'string'\n          },\n          is_email_regex: {\n            type: 'boolean'\n          },\n          last_modified: {\n            type: 'string',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string'\n          },\n          comments: {\n            type: 'string'\n          },\n          directory_id: {\n            type: 'integer'\n          },\n          directory_node_id: {\n            type: 'integer'\n          },\n          external_directory_node_id: {\n            type: 'string'\n          },\n          provenance: {\n            type: 'string'\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'email',\n          'is_email_regex',\n          'last_modified',\n          'name'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'Total results available without any search parameters'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'result_info',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      order: {
        type: 'string',
        description: 'The field to sort by.',
        enum: ['name', 'email', 'created_at'],
      },
      page: {
        type: 'integer',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'The number of results per page.',
      },
      provenance: {
        type: 'string',
        enum: ['A1S_INTERNAL', 'SNOOPY-CASB_OFFICE_365', 'SNOOPY-OFFICE_365', 'SNOOPY-GOOGLE_DIRECTORY'],
      },
      search: {
        type: 'string',
        description:
          'Allows searching in multiple properties of a record simultaneously.\nThis parameter is intended for human users, not automation. Its exact\nbehavior is intentionally left unspecified and is subject to change\nin the future.',
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
  const response = await client.emailSecurity.settings.impersonationRegistry.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
