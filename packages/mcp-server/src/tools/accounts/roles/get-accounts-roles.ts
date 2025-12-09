// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.roles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/roles/{role_id}',
  operationId: 'account-roles-role-details',
};

export const tool: Tool = {
  name: 'get_accounts_roles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information about a specific role for an account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/role',\n  $defs: {\n    role: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Role identifier tag.'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of role\\'s permissions.'\n        },\n        name: {\n          type: 'string',\n          description: 'Role name.'\n        },\n        permissions: {\n          type: 'object',\n          properties: {\n            analytics: {\n              $ref: '#/$defs/permission_grant'\n            },\n            billing: {\n              $ref: '#/$defs/permission_grant'\n            },\n            cache_purge: {\n              $ref: '#/$defs/permission_grant'\n            },\n            dns: {\n              $ref: '#/$defs/permission_grant'\n            },\n            dns_records: {\n              $ref: '#/$defs/permission_grant'\n            },\n            lb: {\n              $ref: '#/$defs/permission_grant'\n            },\n            logs: {\n              $ref: '#/$defs/permission_grant'\n            },\n            organization: {\n              $ref: '#/$defs/permission_grant'\n            },\n            ssl: {\n              $ref: '#/$defs/permission_grant'\n            },\n            waf: {\n              $ref: '#/$defs/permission_grant'\n            },\n            zone_settings: {\n              $ref: '#/$defs/permission_grant'\n            },\n            zones: {\n              $ref: '#/$defs/permission_grant'\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'description',\n        'name',\n        'permissions'\n      ]\n    },\n    permission_grant: {\n      type: 'object',\n      properties: {\n        read: {\n          type: 'boolean'\n        },\n        write: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      role_id: {
        type: 'string',
        description: 'Role identifier tag.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'role_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { role_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.accounts.roles.get(role_id, body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
