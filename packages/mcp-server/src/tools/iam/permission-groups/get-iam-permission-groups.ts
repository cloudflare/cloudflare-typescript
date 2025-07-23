// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.permission_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/iam/permission_groups/{permission_group_id}',
  operationId: 'account-permission-group-details',
};

export const tool: Tool = {
  name: 'get_iam_permission_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information about a specific permission group in an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'A named group of permissions that map to a group of operations against resources.',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Identifier of the permission group.'\n    },\n    meta: {\n      type: 'object',\n      description: 'Attributes associated to the permission group.',\n      properties: {\n        key: {\n          type: 'string'\n        },\n        value: {\n          type: 'string'\n        }\n      }\n    },\n    name: {\n      type: 'string',\n      description: 'Name of the permission group.'\n    }\n  },\n  required: [    'id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      permission_group_id: {
        type: 'string',
        title: 'Permission Group Identifier',
        description: 'Permission Group identifier tag.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'permission_group_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { permission_group_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.iam.permissionGroups.get(permission_group_id, body)),
  );
};

export default { metadata, tool, handler };
