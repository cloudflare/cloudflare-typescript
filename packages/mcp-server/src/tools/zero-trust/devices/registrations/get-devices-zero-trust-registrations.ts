// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.registrations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_registrations',
  description: 'Fetches a single WARP registration.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      registration_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { registration_id, ...body } = args;
  return client.zeroTrust.devices.registrations.get(registration_id, body);
};

export default { metadata, tool, handler };
