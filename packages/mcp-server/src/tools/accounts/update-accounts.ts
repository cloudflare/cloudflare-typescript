// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}',
  operationId: 'accounts-update-account',
};

export const tool: Tool = {
  name: 'update_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response with a single account',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/account'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    account: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        name: {\n          type: 'string',\n          description: 'Account name'\n        },\n        type: {\n          type: 'string',\n          enum: [            'standard',\n            'enterprise'\n          ]\n        },\n        created_on: {\n          type: 'string',\n          description: 'Timestamp for the creation of the account',\n          format: 'date-time'\n        },\n        managed_by: {\n          type: 'object',\n          description: 'Parent container details',\n          properties: {\n            parent_org_id: {\n              type: 'string',\n              description: 'ID of the parent Organization, if one exists'\n            },\n            parent_org_name: {\n              type: 'string',\n              description: 'Name of the parent Organization, if one exists'\n            }\n          }\n        },\n        settings: {\n          type: 'object',\n          description: 'Account settings',\n          properties: {\n            abuse_contact_email: {\n              type: 'string',\n              description: 'Sets an abuse contact email to notify for abuse reports.'\n            },\n            enforce_twofactor: {\n              type: 'boolean',\n              description: 'Indicates whether membership in this account requires that\\nTwo-Factor Authentication is enabled'\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'name',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      id: {
        type: 'string',
        description: 'Identifier',
      },
      name: {
        type: 'string',
        description: 'Account name',
      },
      type: {
        type: 'string',
        enum: ['standard', 'enterprise'],
      },
      managed_by: {
        type: 'object',
        description: 'Parent container details',
        properties: {
          parent_org_id: {
            type: 'string',
            description: 'ID of the parent Organization, if one exists',
          },
          parent_org_name: {
            type: 'string',
            description: 'Name of the parent Organization, if one exists',
          },
        },
      },
      settings: {
        type: 'object',
        description: 'Account settings',
        properties: {
          abuse_contact_email: {
            type: 'string',
            description: 'Sets an abuse contact email to notify for abuse reports.',
          },
          enforce_twofactor: {
            type: 'boolean',
            description:
              'Indicates whether membership in this account requires that\nTwo-Factor Authentication is enabled',
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'id', 'name', 'type'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.accounts.update(body)));
};

export default { metadata, tool, handler };
