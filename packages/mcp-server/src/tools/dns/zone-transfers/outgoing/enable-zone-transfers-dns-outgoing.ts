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
  name: 'enable_zone_transfers_dns_outgoing',
  description: 'Enable outgoing zone transfers for primary zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.zoneTransfers.outgoing.enable(body);
};

export default { metadata, tool, handler };
