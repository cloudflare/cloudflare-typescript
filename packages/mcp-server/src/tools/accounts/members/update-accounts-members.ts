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
  name: 'update_accounts_members',
  description: 'Modify an account member.',
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
          member_id: {
            type: 'string',
            description: 'Membership identifier tag.',
          },
          roles: {
            type: 'array',
            description: 'Roles assigned to this member.',
            items: {
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
                      type: 'object',
                      properties: {
                        read: {
                          type: 'boolean',
                        },
                        write: {
                          type: 'boolean',
                        },
                      },
                      required: [],
                    },
                    billing: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    cache_purge: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    dns: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    dns_records: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    lb: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    logs: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    organization: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    ssl: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    waf: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    zone_settings: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                    zones: {
                      $ref: '#/anyOf/0/properties/roles/items/permissions/analytics',
                    },
                  },
                  required: [],
                },
              },
              required: ['id', 'description', 'name', 'permissions'],
            },
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
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { member_id, ...body } = args;
  return client.accounts.members.update(member_id, body);
};

export default { metadata, tool, handler };
