// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.peers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_zone_transfers_dns_peers',
  description: 'Delete Peer.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      peer_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { peer_id, ...body } = args;
  return client.dns.zoneTransfers.peers.delete(peer_id, body);
};

export default { metadata, tool, handler };
