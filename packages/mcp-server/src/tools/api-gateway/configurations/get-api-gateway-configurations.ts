// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.configurations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/configuration',
  operationId: 'api-shield-settings-retrieve-information-about-specific-configuration-properties',
};

export const tool: Tool = {
  name: 'get_api_gateway_configurations',
  description: 'Retrieve information about specific configuration properties',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      properties: {
        type: 'array',
        description: 'Requests information about certain properties.',
        items: {
          type: 'string',
          enum: ['auth_id_characteristics'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.apiGateway.configurations.get(body);
};

export default { metadata, tool, handler };
