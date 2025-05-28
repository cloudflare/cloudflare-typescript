// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.settings.operations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/schema_validation/settings/operations',
  operationId: 'schema-validation-bulk-edit-per-operation-settings',
};

export const tool: Tool = {
  name: 'bulk_edit_settings_schema_validation_operations',
  description: 'Bulk edit per-operation schema validation settings',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.schemaValidation.settings.operations.bulkEdit(body);
};

export default { metadata, tool, handler };
