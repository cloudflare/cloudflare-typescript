// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}',
  operationId: 'accounts-account-details',
};

export const tool: Tool = {
  name: 'get_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information about a specific account that you are a member of.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/account',\n  $defs: {\n    account: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        name: {\n          type: 'string',\n          description: 'Account name'\n        },\n        type: {\n          type: 'string',\n          enum: [            'standard',\n            'enterprise'\n          ]\n        },\n        created_on: {\n          type: 'string',\n          description: 'Timestamp for the creation of the account',\n          format: 'date-time'\n        },\n        managed_by: {\n          type: 'object',\n          description: 'Parent container details',\n          properties: {\n            parent_org_id: {\n              type: 'string',\n              description: 'ID of the parent Organization, if one exists'\n            },\n            parent_org_name: {\n              type: 'string',\n              description: 'Name of the parent Organization, if one exists'\n            }\n          }\n        },\n        settings: {\n          type: 'object',\n          description: 'Account settings',\n          properties: {\n            abuse_contact_email: {\n              type: 'string',\n              description: 'Sets an abuse contact email to notify for abuse reports.'\n            },\n            enforce_twofactor: {\n              type: 'boolean',\n              description: 'Indicates whether membership in this account requires that\\nTwo-Factor Authentication is enabled'\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'name',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
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
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.accounts.get(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
