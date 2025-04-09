// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.override_codes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_devices_zero_trust_override_codes',
  description:
    'Fetches a one-time use admin override code for a registration. This relies on the **Admin Override** setting being enabled in your device configuration.   \n\n**Deprecated:** please use GET /accounts/{account_id}/devices/registrations/{registration_id}/override_codes instead.\n',
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
  return client.zeroTrust.devices.overrideCodes.list(device_id, body);
};

export default { metadata, tool, handler };
