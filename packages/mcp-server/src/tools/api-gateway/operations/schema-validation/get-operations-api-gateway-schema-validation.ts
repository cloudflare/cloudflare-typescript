// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations.schema_validation',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_operations_api_gateway_schema_validation',
  description: 'Retrieves operation-level schema validation settings on the zone',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      operation_id: {
        type: 'string',
        description: 'UUID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { operation_id, ...body } = args;
  return client.apiGateway.operations.schemaValidation.get(operation_id, body);
};

export default { metadata, tool, handler };
