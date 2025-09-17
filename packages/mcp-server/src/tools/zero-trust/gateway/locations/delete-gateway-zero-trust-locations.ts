// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.locations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/gateway/locations/{location_id}',
  operationId: 'zero-trust-gateway-locations-delete-zero-trust-gateway-location',
};

export const tool: Tool = {
  name: 'delete_gateway_zero_trust_locations',
  description: 'Delete a configured Zero Trust Gateway location.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      location_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'location_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { location_id, ...body } = args as any;
  return asTextContentResult((await client.zeroTrust.gateway.locations.delete(location_id, body)) as object);
};

export default { metadata, tool, handler };
