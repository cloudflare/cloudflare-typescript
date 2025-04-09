// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.user_schemas',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_api_gateway_user_schemas',
  description: 'Upload a schema to a zone',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      file: {
        type: 'string',
        description: 'Schema file bytes',
      },
      kind: {
        type: 'string',
        description: 'Kind of schema',
        enum: ['openapi_v3'],
      },
      name: {
        type: 'string',
        description: 'Name of the schema',
      },
      validation_enabled: {
        type: 'string',
        description: 'Flag whether schema is enabled for validation.',
        enum: ['true', 'false'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.userSchemas.create(body);
};

export default { metadata, tool, handler };
