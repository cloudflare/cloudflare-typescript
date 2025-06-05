// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations.schema_validation',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/api_gateway/operations/schema_validation',
  operationId: 'api-shield-schema-validation-update-multiple-operation-level-settings',
};

export const tool: Tool = {
  name: 'edit_operations_api_gateway_schema_validation',
  description: 'Updates multiple operation-level schema validation settings on the zone',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      settings_multiple_request: {
        $ref: '#/$defs/settings_multiple_request',
      },
    },
    $defs: {
      settings_multiple_request: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.apiGateway.operations.schemaValidation.edit(body));
};

export default { metadata, tool, handler };
