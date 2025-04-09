// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_magic_cloud_networking_on_ramps',
  description: 'Delete an On-ramp (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      onramp_id: {
        type: 'string',
      },
      destroy: {
        type: 'boolean',
      },
      force: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { onramp_id, ...body } = args;
  return client.magicCloudNetworking.onRamps.delete(onramp_id, body);
};

export default { metadata, tool, handler };
