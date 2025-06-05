// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.networks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/devices/networks/{network_id}',
  operationId: 'device-managed-networks-delete-device-managed-network',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { network_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.devices.networks.delete(network_id, body));
};

export default { metadata, tool, handler };
