// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.peers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/secondary_dns/peers/{peer_id}',
  operationId: 'secondary-dns-(-peer)-peer-details',
};

export const tool: Tool = {
  name: 'get_zone_transfers_dns_peers',
  description: 'Get Peer.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { peer_id, ...body } = args as any;
  return asTextContentResult(await client.dns.zoneTransfers.peers.get(peer_id, body));
};

export default { metadata, tool, handler };
