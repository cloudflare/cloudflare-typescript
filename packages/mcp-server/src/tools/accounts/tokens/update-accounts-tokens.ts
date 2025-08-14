// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Update an existing token.',
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
          },
        },
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
    },
    required: ['account_id', 'token_id', 'name', 'policies'],
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
            anyOf: [
              {
                type: 'object',
                description: 'Map of simple string resource permissions',
                additionalProperties: true,
              },
              {
                type: 'object',
                description: 'Map of nested resource permissions',
                additionalProperties: true,
              },
            ],
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { token_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.tokens.update(token_id, body));
};

export default { metadata, tool, handler };
