// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.user_schemas',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/api_gateway/user_schemas/{schema_id}',
  operationId: 'api-shield-schema-validation-enable-validation-for-a-schema',
};

export const tool: Tool = {
  name: 'edit_api_gateway_user_schemas',
  description: 'Enable validation for a schema',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      schema_id: {
        type: 'string',
      },
      validation_enabled: {
        type: 'string',
        description: 'Flag whether schema is enabled for validation.',
        enum: [true],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { schema_id, ...body } = args as any;
  return asTextContentResult(await client.apiGateway.userSchemas.edit(schema_id, body));
};

export default { metadata, tool, handler };
