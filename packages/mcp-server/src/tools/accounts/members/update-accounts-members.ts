// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.members',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/members/{member_id}',
  operationId: 'account-members-update-member',
};

export const tool: Tool = {
  name: 'update_accounts_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nModify an account member.",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            title: 'Account Identifier',
            description: 'Account identifier tag.',
          },
          member_id: {
            type: 'string',
            description: 'Membership identifier tag.',
          },
          roles: {
            type: 'array',
            description: 'Roles assigned to this member.',
            items: {
              $ref: '#/$defs/role',
            },
          },
        },
        required: ['account_id', 'member_id'],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            title: 'Account Identifier',
            description: 'Account identifier tag.',
          },
          member_id: {
            type: 'string',
            description: 'Membership identifier tag.',
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
        },
        required: ['account_id', 'member_id', 'policies'],
      },
    ],
    $defs: {
      role: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Role identifier tag.',
          },
          description: {
            type: 'string',
            description: "Description of role's permissions.",
          },
          name: {
            type: 'string',
            description: 'Role name.',
          },
          permissions: {
            type: 'object',
            properties: {
              analytics: {
                $ref: '#/$defs/permission_grant',
              },
              billing: {
                $ref: '#/$defs/permission_grant',
              },
              cache_purge: {
                $ref: '#/$defs/permission_grant',
              },
              dns: {
                $ref: '#/$defs/permission_grant',
              },
              dns_records: {
                $ref: '#/$defs/permission_grant',
              },
              lb: {
                $ref: '#/$defs/permission_grant',
              },
              logs: {
                $ref: '#/$defs/permission_grant',
              },
              organization: {
                $ref: '#/$defs/permission_grant',
              },
              ssl: {
                $ref: '#/$defs/permission_grant',
              },
              waf: {
                $ref: '#/$defs/permission_grant',
              },
              zone_settings: {
                $ref: '#/$defs/permission_grant',
              },
              zones: {
                $ref: '#/$defs/permission_grant',
              },
            },
          },
        },
        required: ['id', 'description', 'name', 'permissions'],
      },
      permission_grant: {
        type: 'object',
        properties: {
          read: {
            type: 'boolean',
          },
          write: {
            type: 'boolean',
          },
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { member_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.members.update(member_id, body));
};

export default { metadata, tool, handler };
