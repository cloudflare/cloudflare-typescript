// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.tsigs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zone_transfers_dns_tsigs',
  description: 'Get TSIG.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      tsig_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { tsig_id, ...body } = args;
  return client.dns.zoneTransfers.tsigs.get(tsig_id, body);
};

export default { metadata, tool, handler };
