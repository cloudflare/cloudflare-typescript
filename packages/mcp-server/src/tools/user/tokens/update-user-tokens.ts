// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.tokens',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_user_tokens',
  description: 'Update an existing token.',
  inputSchema: {
    type: 'object',
    properties: {
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
                    description: 'Identifier of the group.',
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
                    description: 'Name of the group.',
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
      },
      status: {
        type: 'string',
        description: 'Status of the token.',
        enum: ['active', 'disabled', 'expired'],
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
                  type: 'string',
                  description: 'IPv4/IPv6 CIDR.',
                },
              },
              not_in: {
                type: 'array',
                description: 'List of IPv4/IPv6 CIDR addresses.',
                items: {
                  $ref: '#/properties/condition/request_ip/in/items',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { token_id, ...body } = args;
  return client.user.tokens.update(token_id, body);
};

export default { metadata, tool, handler };
