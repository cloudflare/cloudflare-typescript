// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.locations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_gateway_zero_trust_locations',
  description: 'Deletes a configured Zero Trust Gateway location.',
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
  return client.zeroTrust.gateway.locations.delete(location_id, body);
};

export default { metadata, tool, handler };
