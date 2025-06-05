// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.registrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/registrations/{registration_id}',
  operationId: 'get-registration',
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_registrations',
  description: 'Fetches a single WARP registration.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      registration_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { registration_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.devices.registrations.get(registration_id, body));
};

export default { metadata, tool, handler };
