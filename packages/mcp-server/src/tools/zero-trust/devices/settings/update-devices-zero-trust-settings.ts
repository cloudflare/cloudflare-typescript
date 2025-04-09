// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_devices_zero_trust_settings',
  description: 'Updates the current device settings for a Zero Trust account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      disable_for_time: {
        type: 'number',
        description: 'Sets the time limit, in seconds, that a user can use an override code to bypass WARP.',
      },
      gateway_proxy_enabled: {
        type: 'boolean',
        description: 'Enable gateway proxy filtering on TCP.',
      },
      gateway_udp_proxy_enabled: {
        type: 'boolean',
        description: 'Enable gateway proxy filtering on UDP.',
      },
      root_certificate_installation_enabled: {
        type: 'boolean',
        description: 'Enable installation of cloudflare managed root certificate.',
      },
      use_zt_virtual_ip: {
        type: 'boolean',
        description: 'Enable using CGNAT virtual IPv4.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.devices.settings.update(body);
};

export default { metadata, tool, handler };
