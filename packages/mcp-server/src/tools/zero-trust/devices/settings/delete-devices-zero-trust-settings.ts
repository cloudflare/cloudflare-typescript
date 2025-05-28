// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/devices/settings',
  operationId: 'zero-trust-accounts-delete-device-settings-for-zero-trust-account',
};

export const tool: Tool = {
  name: 'delete_devices_zero_trust_settings',
  description: 'Resets the current device settings for a Zero Trust account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.devices.settings.delete(body);
};

export default { metadata, tool, handler };
