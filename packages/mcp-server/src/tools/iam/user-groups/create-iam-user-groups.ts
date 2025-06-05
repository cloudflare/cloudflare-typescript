// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.user_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/iam/user_groups',
  operationId: 'account-user-group-create',
};

export const tool: Tool = {
  name: 'create_iam_user_groups',
  description: 'Create a new user group under the specified account.',
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
        description: 'Name of the User group.',
      },
      policies: {
        type: 'array',
        title: 'User Group Policies',
        description: 'Policies attached to the User group',
        items: {
          type: 'object',
          properties: {
            access: {
              type: 'string',
              description: 'Allow or deny operations against the resources.',
              enum: ['allow', 'deny'],
            },
            permission_groups: {
              type: 'array',
              title: 'Permission Group IDs',
              description: 'A set of permission groups that are specified to the policy.',
              items: {
                type: 'object',
                description:
                  'A named group of permissions that map to a group of operations against resources.',
                properties: {
                  id: {
                    type: 'string',
                    title: 'Permission Group Identifier',
                    description: 'Permission Group identifier tag.',
                  },
                },
                required: ['id'],
              },
            },
            resource_groups: {
              type: 'array',
              title: 'Resource Group IDs',
              description: 'A set of resource groups that are specified to the policy.',
              items: {
                type: 'object',
                description: 'A group of scoped resources.',
                properties: {
                  id: {
                    type: 'string',
                    title: 'Resource Group Identifier',
                    description: 'Resource Group identifier tag.',
                  },
                },
                required: ['id'],
              },
            },
          },
          required: ['access', 'permission_groups', 'resource_groups'],
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.iam.userGroups.create(body));
};

export default { metadata, tool, handler };
