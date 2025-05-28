// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.registrations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/devices/registrations/revoke',
  operationId: 'revoke-registrations',
};

export const tool: Tool = {
  name: 'revoke_devices_zero_trust_registrations',
  description: 'Revokes a list of WARP registrations.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'array',
        description: 'A list of registration IDs to revoke.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.devices.registrations.revoke(body);
};

export default { metadata, tool, handler };
