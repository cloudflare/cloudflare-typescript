import { Endpoint, Filter, Metadata, query } from '../src/tools';

describe('Endpoint filtering', () => {
  const endpoints: Endpoint[] = [
    endpoint({
      resource: 'user',
      operation: 'read',
      tags: ['admin'],
      toolName: 'retrieve_user',
    }),
    endpoint({
      resource: 'user.profile',
      operation: 'write',
      tags: [],
      toolName: 'create_user_profile',
    }),
    endpoint({
      resource: 'user.profile',
      operation: 'read',
      tags: [],
      toolName: 'get_user_profile',
    }),
    endpoint({
      resource: 'user.roles.permissions',
      operation: 'write',
      tags: ['admin', 'security'],
      toolName: 'update_user_role_permissions',
    }),
    endpoint({
      resource: 'documents.metadata.tags',
      operation: 'write',
      tags: ['taxonomy', 'metadata'],
      toolName: 'create_document_metadata_tags',
    }),
    endpoint({
      resource: 'organization.settings',
      operation: 'read',
      tags: ['admin', 'configuration'],
      toolName: 'get_organization_settings',
    }),
  ];

  const tests: { name: string; filters: Filter[]; expected: string[] }[] = [
    {
      name: 'match none',
      filters: [],
      expected: [],
    },

    // Resource tests
    {
      name: 'simple resource',
      filters: [{ type: 'resource', op: 'include', value: 'user' }],
      expected: ['retrieve_user'],
    },
    {
      name: 'exclude resource',
      filters: [{ type: 'resource', op: 'exclude', value: 'user' }],
      expected: [
        'create_user_profile',
        'get_user_profile',
        'update_user_role_permissions',
        'create_document_metadata_tags',
        'get_organization_settings',
      ],
    },
    {
      name: 'resource and subresources',
      filters: [{ type: 'resource', op: 'include', value: 'user*' }],
      expected: ['retrieve_user', 'create_user_profile', 'get_user_profile', 'update_user_role_permissions'],
    },
    {
      name: 'just subresources',
      filters: [{ type: 'resource', op: 'include', value: 'user.*' }],
      expected: ['create_user_profile', 'get_user_profile', 'update_user_role_permissions'],
    },
    {
      name: 'specific subresource',
      filters: [{ type: 'resource', op: 'include', value: 'user.roles.permissions' }],
      expected: ['update_user_role_permissions'],
    },
    {
      name: 'deep wildcard match',
      filters: [{ type: 'resource', op: 'include', value: '*.*.tags' }],
      expected: ['create_document_metadata_tags'],
    },

    // Operation tests
    {
      name: 'read operation',
      filters: [{ type: 'operation', op: 'include', value: 'read' }],
      expected: ['retrieve_user', 'get_user_profile', 'get_organization_settings'],
    },
    {
      name: 'write operation',
      filters: [{ type: 'operation', op: 'include', value: 'write' }],
      expected: ['create_user_profile', 'update_user_role_permissions', 'create_document_metadata_tags'],
    },
    {
      name: 'resource and operation combined',
      filters: [
        { type: 'resource', op: 'include', value: 'user.profile' },
        { type: 'operation', op: 'exclude', value: 'write' },
      ],
      expected: ['get_user_profile'],
    },

    // Tag tests
    {
      name: 'admin tag',
      filters: [{ type: 'tag', op: 'include', value: 'admin' }],
      expected: ['retrieve_user', 'update_user_role_permissions', 'get_organization_settings'],
    },
    {
      name: 'taxonomy tag',
      filters: [{ type: 'tag', op: 'include', value: 'taxonomy' }],
      expected: ['create_document_metadata_tags'],
    },
    {
      name: 'multiple tags (OR logic)',
      filters: [
        { type: 'tag', op: 'include', value: 'admin' },
        { type: 'tag', op: 'include', value: 'security' },
      ],
      expected: ['retrieve_user', 'update_user_role_permissions', 'get_organization_settings'],
    },
    {
      name: 'excluding a tag',
      filters: [
        { type: 'tag', op: 'include', value: 'admin' },
        { type: 'tag', op: 'exclude', value: 'security' },
      ],
      expected: ['retrieve_user', 'get_organization_settings'],
    },

    // Tool name tests
    {
      name: 'tool name match',
      filters: [{ type: 'tool', op: 'include', value: 'get_organization_settings' }],
      expected: ['get_organization_settings'],
    },
    {
      name: 'two tools match',
      filters: [
        { type: 'tool', op: 'include', value: 'get_organization_settings' },
        { type: 'tool', op: 'include', value: 'create_user_profile' },
      ],
      expected: ['create_user_profile', 'get_organization_settings'],
    },
    {
      name: 'excluding tool by name',
      filters: [
        { type: 'resource', op: 'include', value: 'user*' },
        { type: 'tool', op: 'exclude', value: 'retrieve_user' },
      ],
      expected: ['create_user_profile', 'get_user_profile', 'update_user_role_permissions'],
    },

    // Complex combinations
    {
      name: 'complex filter: read operations with admin tag',
      filters: [
        { type: 'operation', op: 'include', value: 'read' },
        { type: 'tag', op: 'include', value: 'admin' },
      ],
      expected: [
        'retrieve_user',
        'get_user_profile',
        'update_user_role_permissions',
        'get_organization_settings',
      ],
    },
    {
      name: 'complex filter: user resources with no tags',
      filters: [
        { type: 'resource', op: 'include', value: 'user.profile' },
        { type: 'tag', op: 'exclude', value: 'admin' },
      ],
      expected: ['create_user_profile', 'get_user_profile'],
    },
    {
      name: 'complex filter: user resources and tags',
      filters: [
        { type: 'resource', op: 'include', value: 'user.profile' },
        { type: 'tag', op: 'include', value: 'admin' },
      ],
      expected: [
        'retrieve_user',
        'create_user_profile',
        'get_user_profile',
        'update_user_role_permissions',
        'get_organization_settings',
      ],
    },
  ];

  tests.forEach((test) => {
    it(`filters by ${test.name}`, () => {
      const filtered = query(test.filters, endpoints);
      expect(filtered.map((e) => e.tool.name)).toEqual(test.expected);
    });
  });
});

function endpoint({
  resource,
  operation,
  tags,
  toolName,
}: {
  resource: string;
  operation: Metadata['operation'];
  tags: string[];
  toolName: string;
}): Endpoint {
  return {
    metadata: {
      resource,
      operation,
      tags,
    },
    tool: { name: toolName, inputSchema: { type: 'object', properties: {} } },
    handler: jest.fn(),
  };
}
