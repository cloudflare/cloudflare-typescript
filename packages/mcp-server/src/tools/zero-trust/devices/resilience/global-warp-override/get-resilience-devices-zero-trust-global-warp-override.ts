// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.resilience.global_warp_override',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_resilience_devices_zero_trust_global_warp_override',
  description: 'Fetch the Global WARP override state',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.devices.resilience.globalWARPOverride.get(body);
};

export default { metadata, tool, handler };
