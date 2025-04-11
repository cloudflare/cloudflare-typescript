// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.devices',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_devices_zero_trust_devices',
  description: 'Deletes a WARP device.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      device_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { device_id, ...body } = args;
  return client.zeroTrust.devices.devices.delete(device_id, body);
};

export default { metadata, tool, handler };
