// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.locations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/locations/{location_id}',
  operationId: 'zero-trust-gateway-locations-zero-trust-gateway-location-details',
};

export const tool: Tool = {
  name: 'get_gateway_zero_trust_locations',
  description: 'Fetches a single Zero Trust Gateway location.',
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { location_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.gateway.locations.get(location_id, body));
};

export default { metadata, tool, handler };
