// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.tokens.permission_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/tokens/permission_groups',
  operationId: 'account-api-tokens-list-permission-groups',
};

export const tool: Tool = {
  name: 'get_tokens_accounts_permission_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFind all available permission groups for Account Owned API Tokens\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/permission_group_get_response',\n  $defs: {\n    permission_group_get_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Public ID.'\n          },\n          name: {\n            type: 'string',\n            description: 'Permission Group Name'\n          },\n          scopes: {\n            type: 'array',\n            description: 'Resources to which the Permission Group is scoped',\n            items: {\n              type: 'string',\n              enum: [                'com.cloudflare.api.account',\n                'com.cloudflare.api.account.zone',\n                'com.cloudflare.api.user',\n                'com.cloudflare.edge.r2.bucket'\n              ]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      name: {
        type: 'string',
        description: 'Filter by the name of the permission group.\nThe value must be URL-encoded.',
      },
      scope: {
        type: 'string',
        description: 'Filter by the scope of the permission group.\nThe value must be URL-encoded.',
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.accounts.tokens.permissionGroups.get(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
