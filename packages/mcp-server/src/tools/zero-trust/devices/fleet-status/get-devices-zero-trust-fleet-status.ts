// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.fleet_status',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_fleet_status',
  description: 'Get the live status of a latest device given device_id from the device_state table',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      device_id: {
        type: 'string',
        description: 'Device-specific ID, given as UUID v4',
      },
      since_minutes: {
        type: 'number',
        description: 'Number of minutes before current time',
      },
      colo: {
        type: 'string',
        description: 'List of data centers to filter results',
      },
      time_now: {
        type: 'string',
        description: 'Number of minutes before current time',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { device_id, ...body } = args;
  return client.zeroTrust.devices.fleetStatus.get(device_id, body);
};

export default { metadata, tool, handler };
