// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.resilience.global_warp_override',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_resilience_devices_zero_trust_global_warp_override',
  description: 'Sets the Global WARP override state.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      disconnect: {
        type: 'boolean',
        description: 'Disconnects all devices on the account using Global WARP override.',
      },
      justification: {
        type: 'string',
        description:
          'Reasoning for setting the Global WARP override state. This will be surfaced in the audit log.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.devices.resilience.globalWARPOverride.create(body);
};

export default { metadata, tool, handler };
