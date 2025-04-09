// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.locations',
  operation: 'read',
  tags: [],
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

export const handler = (client: Cloudflare, args: any) => {
  const { location_id, ...body } = args;
  return client.zeroTrust.gateway.locations.get(location_id, body);
};

export default { metadata, tool, handler };
