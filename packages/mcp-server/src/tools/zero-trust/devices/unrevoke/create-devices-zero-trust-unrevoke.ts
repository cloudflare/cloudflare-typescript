// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.unrevoke',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/devices/unrevoke',
  operationId: 'devices-unrevoke-devices',
};

export const tool: Tool = {
  name: 'create_devices_zero_trust_unrevoke',
  description:
    'Unrevokes a list of devices. Not supported when [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/) is enabled.\n\n**Deprecated**: please use POST /accounts/{account_id}/devices/registrations/unrevoke instead.\n',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.devices.unrevoke.create(body));
};

export default { metadata, tool, handler };
