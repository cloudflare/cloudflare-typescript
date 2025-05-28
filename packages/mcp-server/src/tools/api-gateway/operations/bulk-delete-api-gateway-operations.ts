// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/api_gateway/operations',
  operationId: 'api-shield-endpoint-management-delete-multiple-operations',
};

export const tool: Tool = {
  name: 'bulk_delete_api_gateway_operations',
  description: 'Delete multiple operations',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.apiGateway.operations.bulkDelete(body);
};

export default { metadata, tool, handler };
