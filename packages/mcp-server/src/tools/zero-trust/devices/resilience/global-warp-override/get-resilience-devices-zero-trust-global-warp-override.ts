// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.resilience.global_warp_override',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/resilience/disconnect',
  operationId: 'devices-resilience-retrieve-global-warp-override',
};

export const tool: Tool = {
  name: 'get_resilience_devices_zero_trust_global_warp_override',
  description: 'Fetch the Global WARP override state.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.devices.resilience.globalWARPOverride.get(body));
};

export default { metadata, tool, handler };
