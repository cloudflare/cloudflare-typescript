// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.tsigs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_zone_transfers_dns_tsigs',
  description: 'Create TSIG.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      algo: {
        type: 'string',
        description: 'TSIG algorithm.',
      },
      name: {
        type: 'string',
        description: 'TSIG key name.',
      },
      secret: {
        type: 'string',
        description: 'TSIG secret.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.zoneTransfers.tsigs.create(body);
};

export default { metadata, tool, handler };
