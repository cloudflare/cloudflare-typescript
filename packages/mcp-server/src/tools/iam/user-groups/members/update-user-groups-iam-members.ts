// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.user_groups.members',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/iam/user_groups/{user_group_id}/members',
  operationId: 'account-user-group-members-update',
};

export const tool: Tool = {
  name: 'update_user_groups_iam_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReplace the set of members attached to a User Group.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'Member attached to a User Group.',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Account member identifier.'\n          },\n          email: {\n            type: 'string',\n            description: 'The contact email address of the user.'\n          },\n          status: {\n            type: 'string',\n            description: 'The member\\'s status in the account.',\n            enum: [              'accepted',\n              'pending'\n            ]\n          }\n        },\n        required: [          'id'\n        ]\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      user_group_id: {
        type: 'string',
        title: 'User Group Identifier',
        description: 'User Group identifier tag.',
      },
      body: {
        type: 'array',
        title: 'Update User Group Members',
        description: 'Set/Replace members to a user group.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              title: 'User Group Member Identifier',
              description: 'The identifier of an existing account Member.',
            },
          },
          required: ['id'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'user_group_id', 'body'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { user_group_id, jq_filter, ...body } = args as any;
  const response = await client.iam.userGroups.members.update(user_group_id, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
