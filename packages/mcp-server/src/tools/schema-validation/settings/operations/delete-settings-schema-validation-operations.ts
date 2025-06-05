// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.settings.operations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/schema_validation/settings/operations/{operation_id}',
  operationId: 'schema-validation-delete-per-operation-setting',
};

export const tool: Tool = {
  name: 'delete_settings_schema_validation_operations',
  description: 'Delete per-operation schema validation setting',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      operation_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { operation_id, ...body } = args as any;
  return asTextContentResult(await client.schemaValidation.settings.operations.delete(operation_id, body));
};

export default { metadata, tool, handler };
