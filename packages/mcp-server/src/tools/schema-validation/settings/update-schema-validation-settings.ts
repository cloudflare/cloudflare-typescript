// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/schema_validation/settings',
  operationId: 'schema-validation-update-settings',
};

export const tool: Tool = {
  name: 'update_schema_validation_settings',
  description: 'Update global schema validation settings',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      validation_default_mitigation_action: {
        type: 'string',
        description:
          'The default mitigation action used\nMitigation actions are as follows:\n\n  - `"log"` - log request when request does not conform to schema\n  - `"block"` - deny access to the site when request does not conform to schema\n  - `"none"` - skip running schema validation',
        enum: ['none', 'log', 'block'],
      },
      validation_override_mitigation_action: {
        type: 'string',
        description:
          'When set, this overrides both zone level and operation level mitigation actions.\n\n  - `"none"` - skip running schema validation entirely for the request\n  - `null` - clears any existing override',
        enum: ['none'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.schemaValidation.settings.update(body));
};

export default { metadata, tool, handler };
