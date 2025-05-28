// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/physical-devices/{device_id}',
  operationId: 'get-device',
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_devices',
  description: 'Fetches a single WARP device.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { device_id, ...body } = args as any;
  return client.zeroTrust.devices.devices.get(device_id, body);
};

export default { metadata, tool, handler };
