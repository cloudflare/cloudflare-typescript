// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.settings.schema_validation',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_settings_api_gateway_schema_validation',
  description: 'Retrieves zone level schema validation settings currently set on the zone',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.settings.schemaValidation.get(body);
};

export default { metadata, tool, handler };
