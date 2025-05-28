// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.schemas',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/schema_validation/schemas/{schema_id}',
  operationId: 'schema-validation-edit-schema',
};

export const tool: Tool = {
  name: 'edit_schema_validation_schemas',
  description: 'Edit details of a schema to enable validation',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      schema_id: {
        type: 'string',
        description: 'UUID.',
      },
      validation_enabled: {
        type: 'boolean',
        description: 'Flag whether schema is enabled for validation.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { schema_id, ...body } = args as any;
  return client.schemaValidation.schemas.edit(schema_id, body);
};

export default { metadata, tool, handler };
