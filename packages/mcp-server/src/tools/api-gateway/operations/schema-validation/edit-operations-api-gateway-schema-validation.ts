// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations.schema_validation',
  operation: 'write',
  tags: [],
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
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.operations.schemaValidation.edit(body);
};

export default { metadata, tool, handler };
