// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.members',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_accounts_members',
  description: 'Add a user to the list of members for this account.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Account identifier tag.',
          },
          email: {
            type: 'string',
            description: 'The contact email address of the user.',
          },
          roles: {
            type: 'array',
            description: 'Array of roles associated with this member.',
            items: {
              type: 'string',
              description: 'Role identifier tag.',
            },
          },
          status: {
            type: 'string',
            enum: ['accepted', 'pending'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Account identifier tag.',
          },
          email: {
            type: 'string',
            description: 'The contact email address of the user.',
          },
          policies: {
            type: 'array',
            description: 'Array of policies associated with this member.',
            items: {
              type: 'object',
              title: 'create_member_policy',
              properties: {
                id: {
                  type: 'string',
                  description: 'Policy identifier.',
                },
                access: {
                  type: 'string',
                  description: 'Allow or deny operations against the resources.',
                  enum: ['allow', 'deny'],
                },
                permission_groups: {
                  type: 'array',
                  description: 'A set of permission groups that are specified to the policy.',
                  items: {
                    type: 'object',
                    description: 'A group of permissions.',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Identifier of the group.',
                      },
                    },
                    required: ['id'],
                  },
                },
                resource_groups: {
                  type: 'array',
                  description: 'A list of resource groups that the policy applies to.',
                  items: {
                    type: 'object',
                    description: 'A group of scoped resources.',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'Identifier of the group.',
                      },
                    },
                    required: ['id'],
                  },
                },
              },
              required: ['id', 'access', 'permission_groups', 'resource_groups'],
            },
          },
          status: {
            type: 'string',
            enum: ['accepted', 'pending'],
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.accounts.members.create(body);
};

export default { metadata, tool, handler };
