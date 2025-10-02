// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.fleet_status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/fleet-status/over-time',
  operationId: 'dex-fleet-status-over-time',
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
    required: ['account_id', 'from', 'to'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.dex.fleetStatus.overTime(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
