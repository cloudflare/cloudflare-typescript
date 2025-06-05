// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.fleet_status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/fleet-status/live',
  operationId: 'dex-fleet-status-live',
};

export const tool: Tool = {
  name: 'live_dex_zero_trust_fleet_status',
  description: 'List details for live (up to 60 minutes) devices using WARP',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      since_minutes: {
        type: 'number',
        description: 'Number of minutes before current time',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.dex.fleetStatus.live(body));
};

export default { metadata, tool, handler };
