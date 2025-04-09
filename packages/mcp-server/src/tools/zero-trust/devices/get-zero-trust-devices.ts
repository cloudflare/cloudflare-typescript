// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zero_trust_devices',
  description:
    'Fetches a single WARP registration.\n\n**Deprecated**: please use one of the following endpoints instead:\n- GET /accounts/{account_id}/devices/physical-devices/{device_id}\n- GET /accounts/{account_id}/devices/registrations/{registration_id}\n',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      device_id: {
        type: 'string',
        description:
          'Registration ID. Equal to Device ID except for accounts which enabled [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/).',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { device_id, ...body } = args;
  return client.zeroTrust.devices.get(device_id, body);
};

export default { metadata, tool, handler };
