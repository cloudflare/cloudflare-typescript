// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/tokens/{token_id}',
  operationId: 'account-api-tokens-update-token',
};

export const tool: Tool = {
  name: 'update_accounts_tokens',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing token.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response with a single token',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/token'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    token: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Token identifier tag.'\n        },\n        condition: {\n          type: 'object',\n          properties: {\n            request_ip: {\n              type: 'object',\n              description: 'Client IP restrictions.',\n              properties: {\n                in: {\n                  type: 'array',\n                  description: 'List of IPv4/IPv6 CIDR addresses.',\n                  items: {\n                    $ref: '#/$defs/token_condition_cidr_list'\n                  }\n                },\n                not_in: {\n                  type: 'array',\n                  description: 'List of IPv4/IPv6 CIDR addresses.',\n                  items: {\n                    $ref: '#/$defs/token_condition_cidr_list'\n                  }\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        },\n        expires_on: {\n          type: 'string',\n          description: 'The expiration time on or after which the JWT MUST NOT be accepted for processing.',\n          format: 'date-time'\n        },\n        issued_on: {\n          type: 'string',\n          description: 'The time on which the token was created.',\n          format: 'date-time'\n        },\n        last_used_on: {\n          type: 'string',\n          description: 'Last time the token was used.',\n          format: 'date-time'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Last time the token was modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Token name.'\n        },\n        not_before: {\n          type: 'string',\n          description: 'The time before which the token MUST NOT be accepted for processing.',\n          format: 'date-time'\n        },\n        policies: {\n          type: 'array',\n          description: 'List of access policies assigned to the token.',\n          items: {\n            $ref: '#/$defs/token_policy'\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the token.',\n          enum: [            'active',\n            'disabled',\n            'expired'\n          ]\n        }\n      },\n      required: []\n    },\n    token_condition_cidr_list: {\n      type: 'string',\n      description: 'IPv4/IPv6 CIDR.'\n    },\n    token_policy: {\n      type: 'object',\n      title: 'Policy with Permission Groups and Resources',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Policy identifier.'\n        },\n        effect: {\n          type: 'string',\n          description: 'Allow or deny operations against the resources.',\n          enum: [            'allow',\n            'deny'\n          ]\n        },\n        permission_groups: {\n          type: 'array',\n          description: 'A set of permission groups that are specified to the policy.',\n          items: {\n            type: 'object',\n            description: 'A named group of permissions that map to a group of operations against resources.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifier of the permission group.'\n              },\n              meta: {\n                type: 'object',\n                description: 'Attributes associated to the permission group.',\n                properties: {\n                  key: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                },\n                required: []\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the permission group.'\n              }\n            },\n            required: [              'id'\n            ]\n          }\n        },\n        resources: {\n          type: 'object',\n          description: 'A list of resource names that the policy applies to.'\n        }\n      },\n      required: [        'id',\n        'effect',\n        'permission_groups',\n        'resources'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      token_id: {
        type: 'string',
        description: 'Token identifier tag.',
      },
      name: {
        type: 'string',
        description: 'Token name.',
      },
      policies: {
        type: 'array',
        description: 'List of access policies assigned to the token.',
        items: {
          $ref: '#/$defs/token_policy',
        },
      },
      condition: {
        type: 'object',
        properties: {
          request_ip: {
            type: 'object',
            description: 'Client IP restrictions.',
            properties: {
              in: {
                type: 'array',
                description: 'List of IPv4/IPv6 CIDR addresses.',
                items: {
                  $ref: '#/$defs/token_condition_cidr_list',
                },
              },
              not_in: {
                type: 'array',
                description: 'List of IPv4/IPv6 CIDR addresses.',
                items: {
                  $ref: '#/$defs/token_condition_cidr_list',
                },
              },
            },
            required: [],
          },
        },
        required: [],
      },
      expires_on: {
        type: 'string',
        description: 'The expiration time on or after which the JWT MUST NOT be accepted for processing.',
        format: 'date-time',
      },
      not_before: {
        type: 'string',
        description: 'The time before which the token MUST NOT be accepted for processing.',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Status of the token.',
        enum: ['active', 'disabled', 'expired'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      token_policy: {
        type: 'object',
        title: 'Policy with Permission Groups and Resources',
        properties: {
          id: {
            type: 'string',
            description: 'Policy identifier.',
          },
          effect: {
            type: 'string',
            description: 'Allow or deny operations against the resources.',
            enum: ['allow', 'deny'],
          },
          permission_groups: {
            type: 'array',
            description: 'A set of permission groups that are specified to the policy.',
            items: {
              type: 'object',
              description:
                'A named group of permissions that map to a group of operations against resources.',
              properties: {
                id: {
                  type: 'string',
                  description: 'Identifier of the permission group.',
                },
                meta: {
                  type: 'object',
                  description: 'Attributes associated to the permission group.',
                  properties: {
                    key: {
                      type: 'string',
                    },
                    value: {
                      type: 'string',
                    },
                  },
                  required: [],
                },
                name: {
                  type: 'string',
                  description: 'Name of the permission group.',
                },
              },
              required: ['id'],
            },
          },
          resources: {
            type: 'object',
            description: 'A list of resource names that the policy applies to.',
          },
        },
        required: ['id', 'effect', 'permission_groups', 'resources'],
      },
      token_condition_cidr_list: {
        type: 'string',
        description: 'IPv4/IPv6 CIDR.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { token_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.accounts.tokens.update(token_id, body)));
};

export default { metadata, tool, handler };
