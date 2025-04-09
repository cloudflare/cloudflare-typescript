// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.outgoing',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_zone_transfers_dns_outgoing',
  description: 'Create primary zone configuration for outgoing zone transfers.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Zone name.',
      },
      peers: {
        type: 'array',
        description: 'A list of peer tags.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.zoneTransfers.outgoing.create(body);
};

export default { metadata, tool, handler };
