// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps.address_spaces',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space',
  operationId: 'onramps-mwan-addr-space-patch',
};

export const tool: Tool = {
  name: 'edit_on_ramps_magic_cloud_networking_address_spaces',
  description: 'Update the Magic WAN Address Space (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      prefixes: {
        type: 'array',
        items: {
          type: 'string',
          description: 'An IP address prefix in CIDR format.',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.magicCloudNetworking.onRamps.addressSpaces.edit(body);
};

export default { metadata, tool, handler };
