// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.incoming',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_zone_transfers_dns_incoming',
  description: 'Create secondary zone configuration for incoming zone transfers.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
      },
      auto_refresh_seconds: {
        type: 'number',
        description:
          'How often should a secondary zone auto refresh regardless of DNS NOTIFY.\nNot applicable for primary zones.',
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
  return client.dns.zoneTransfers.incoming.create(body);
};

export default { metadata, tool, handler };
