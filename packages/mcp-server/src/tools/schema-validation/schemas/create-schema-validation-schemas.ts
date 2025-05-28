// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.schemas',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/schema_validation/schemas',
  operationId: 'schema-validation-create-schema',
};

export const tool: Tool = {
  name: 'create_schema_validation_schemas',
  description: 'Upload a schema',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      kind: {
        type: 'string',
        description: 'The kind of the schema',
        enum: ['openapi_v3'],
      },
      name: {
        type: 'string',
        description: 'A human-readable name for the schema',
      },
      source: {
        type: 'string',
        description: 'The raw schema, e.g., the OpenAPI schema, either as JSON or YAML',
      },
      validation_enabled: {
        type: 'boolean',
        description: 'An indicator if this schema is enabled',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.schemaValidation.schemas.create(body);
};

export default { metadata, tool, handler };
