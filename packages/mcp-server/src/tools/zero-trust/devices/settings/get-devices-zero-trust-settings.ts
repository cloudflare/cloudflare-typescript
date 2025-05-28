// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/settings',
  operationId: 'zero-trust-accounts-get-device-settings-for-zero-trust-account',
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_settings',
  description: 'Describes the current device settings for a Zero Trust account.',
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
  return client.zeroTrust.devices.settings.get(body);
};

export default { metadata, tool, handler };
