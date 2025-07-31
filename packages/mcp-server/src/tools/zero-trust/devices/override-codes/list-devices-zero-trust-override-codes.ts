// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.override_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/{device_id}/override_codes',
  operationId: 'devices-list-admin-override-code-for-device',
};

export const tool: Tool = {
  name: 'list_devices_zero_trust_override_codes',
  description:
    'Fetches a one-time use admin override code for a device. This relies on the **Admin Override** setting being enabled in your device configuration. Not supported when [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/) is enabled for the account.\n**Deprecated:** please use GET /accounts/{account_id}/devices/registrations/{registration_id}/override_codes instead.\n',
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
    required: ['account_id', 'device_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { device_id, ...body } = args as any;
  return asTextContentResult((await client.zeroTrust.devices.overrideCodes.list(device_id, body)) as object);
};

export default { metadata, tool, handler };
