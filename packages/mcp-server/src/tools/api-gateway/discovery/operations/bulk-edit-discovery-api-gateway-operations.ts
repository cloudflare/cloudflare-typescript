// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.discovery.operations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_edit_discovery_api_gateway_operations',
  description: 'Update the `state` on one or more discovered operations',
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

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.discovery.operations.bulkEdit(body);
};

export default { metadata, tool, handler };
