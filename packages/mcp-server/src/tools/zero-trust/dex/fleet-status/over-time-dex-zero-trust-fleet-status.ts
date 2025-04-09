// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.fleet_status',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'over_time_dex_zero_trust_fleet_status',
  description: 'List details for devices using WARP, up to 7 days',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      from: {
        type: 'string',
        description: 'Time range beginning in ISO format',
      },
      to: {
        type: 'string',
        description: 'Time range end in ISO format',
      },
      colo: {
        type: 'string',
        description: 'Cloudflare colo',
      },
      device_id: {
        type: 'string',
        description: 'Device-specific ID, given as UUID v4',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dex.fleetStatus.overTime(body);
};

export default { metadata, tool, handler };
