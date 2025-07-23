// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.user_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/iam/user_groups/{user_group_id}',
  operationId: 'account-user-group-details',
};

export const tool: Tool = {
  name: 'get_iam_user_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information about a specific user group in an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      description: 'A group of policies resources.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'User Group Identifier',\n          description: 'User Group identifier tag.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'Timestamp for the creation of the user group',\n          format: 'date-time'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Last time the user group was modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the user group.'\n        },\n        policies: {\n          type: 'array',\n          title: 'User Group Policies',\n          description: 'Policies attached to the User group',\n          items: {\n            type: 'object',\n            title: 'Authorization Policy',\n            description: 'Policy',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Policy identifier.'\n              },\n              access: {\n                type: 'string',\n                description: 'Allow or deny operations against the resources.',\n                enum: [                  'allow',\n                  'deny'\n                ]\n              },\n              permission_groups: {\n                type: 'array',\n                description: 'A set of permission groups that are specified to the policy.',\n                items: {\n                  type: 'object',\n                  description: 'A named group of permissions that map to a group of operations against resources.',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'Identifier of the permission group.'\n                    },\n                    meta: {\n                      type: 'object',\n                      description: 'Attributes associated to the permission group.',\n                      properties: {\n                        key: {\n                          type: 'string'\n                        },\n                        value: {\n                          type: 'string'\n                        }\n                      }\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Name of the permission group.'\n                    }\n                  },\n                  required: [                    'id'\n                  ]\n                }\n              },\n              resource_groups: {\n                type: 'array',\n                description: 'A list of resource groups that the policy applies to.',\n                items: {\n                  type: 'object',\n                  description: 'A group of scoped resources.',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'Identifier of the resource group.'\n                    },\n                    scope: {\n                      type: 'array',\n                      description: 'The scope associated to the resource group',\n                      items: {\n                        type: 'object',\n                        description: 'A scope is a combination of scope objects which provides additional context.',\n                        properties: {\n                          key: {\n                            type: 'string',\n                            description: 'This is a combination of pre-defined resource name and identifier (like Account ID etc.)'\n                          },\n                          objects: {\n                            type: 'array',\n                            description: 'A list of scope objects for additional context.',\n                            items: {\n                              type: 'object',\n                              description: 'A scope object represents any resource that can have actions applied against invite.',\n                              properties: {\n                                key: {\n                                  type: 'string',\n                                  description: 'This is a combination of pre-defined resource name and identifier (like Zone ID etc.)'\n                                }\n                              },\n                              required: [                                'key'\n                              ]\n                            }\n                          }\n                        },\n                        required: [                          'key',\n                          'objects'\n                        ]\n                      }\n                    },\n                    meta: {\n                      type: 'object',\n                      description: 'Attributes associated to the resource group.',\n                      properties: {\n                        key: {\n                          type: 'string'\n                        },\n                        value: {\n                          type: 'string'\n                        }\n                      }\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Name of the resource group.'\n                    }\n                  },\n                  required: [                    'id',\n                    'scope'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'modified_on',\n        'name'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'user_group_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { user_group_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.iam.userGroups.get(user_group_id, body)));
};

export default { metadata, tool, handler };
