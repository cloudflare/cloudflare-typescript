// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.networks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_devices_zero_trust_networks',
  description:
    'Deletes a device managed network and fetches a list of the remaining device managed networks for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      network_id: {
        type: 'string',
        description: 'API UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { network_id, ...body } = args;
  return client.zeroTrust.devices.networks.delete(network_id, body);
};

export default { metadata, tool, handler };
