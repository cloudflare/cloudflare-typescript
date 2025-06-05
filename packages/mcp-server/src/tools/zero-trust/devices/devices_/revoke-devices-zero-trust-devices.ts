// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.devices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/devices/physical-devices/{device_id}/revoke',
  operationId: 'revoke-device',
};

export const tool: Tool = {
  name: 'revoke_devices_zero_trust_devices',
  description: 'Revokes all registrations associated with the specified device.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { device_id, ...body } = args as any;
  return asTextContentResult((await client.zeroTrust.devices.devices.revoke(device_id, body)) as object);
};

export default { metadata, tool, handler };
