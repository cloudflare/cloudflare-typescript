// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.force_axfr',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_zone_transfers_dns_force_axfr',
  description: 'Sends AXFR zone transfer request to primary nameserver(s).',
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
  return client.dns.zoneTransfers.forceAXFR.create(body);
};

export default { metadata, tool, handler };
