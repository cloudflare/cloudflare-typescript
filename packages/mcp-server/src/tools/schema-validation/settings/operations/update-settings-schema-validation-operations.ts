// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.settings.operations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/schema_validation/settings/operations/{operation_id}',
  operationId: 'schema-validation-update-per-operation-setting',
};

export const tool: Tool = {
  name: 'update_settings_schema_validation_operations',
  description: 'Update per-operation schema validation setting',
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
      mitigation_action: {
        type: 'string',
        description:
          'When set, this applies a mitigation action to this operation\n\n  - `"log"` - log request when request does not conform to schema for this operation\n  - `"block"` - deny access to the site when request does not conform to schema for this operation\n  - `"none"` - will skip mitigation for this operation\n  - `null` - clears any mitigation action',
        enum: ['log', 'block', 'none'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { operation_id, ...body } = args as any;
  return client.schemaValidation.settings.operations.update(operation_id, body);
};

export default { metadata, tool, handler };
