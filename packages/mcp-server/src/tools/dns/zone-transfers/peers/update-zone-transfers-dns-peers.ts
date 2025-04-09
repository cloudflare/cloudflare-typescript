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
  name: 'update_zone_transfers_dns_peers',
  description: 'Modify Peer.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      peer_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'The name of the peer.',
      },
      ip: {
        type: 'string',
        description:
          'IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary zones this IP defines the IP of the primary nameserver Cloudflare will send AXFR/IXFR requests to.',
      },
      ixfr_enable: {
        type: 'boolean',
        description: 'Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.',
      },
      port: {
        type: 'number',
        description:
          'DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.',
      },
      tsig_id: {
        type: 'string',
        description: 'TSIG authentication will be used for zone transfer if configured.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { peer_id, ...body } = args;
  return client.dns.zoneTransfers.peers.update(peer_id, body);
};

export default { metadata, tool, handler };
