// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.unrevoke',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_devices_zero_trust_unrevoke',
  description:
    'Unrevokes a list of registrations.\n\n**Deprecated**: please use POST /accounts/{account_id}/devices/registrations/unrevoke instead.\n',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      body: {
        type: 'array',
        description: 'A list of Registration IDs to unrevoke.',
        items: {
          type: 'string',
          description:
            'Registration ID. Equal to Device ID except for accounts which enabled [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/).',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.devices.unrevoke.create(body);
};

export default { metadata, tool, handler };
