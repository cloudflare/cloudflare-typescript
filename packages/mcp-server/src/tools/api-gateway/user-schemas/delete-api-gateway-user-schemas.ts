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
  name: 'delete_api_gateway_user_schemas',
  description: 'Delete a schema',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { schema_id, ...body } = args;
  return client.apiGateway.userSchemas.delete(schema_id, body);
};

export default { metadata, tool, handler };
