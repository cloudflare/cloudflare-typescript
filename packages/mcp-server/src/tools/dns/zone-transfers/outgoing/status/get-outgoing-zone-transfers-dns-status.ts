// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.outgoing.status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/secondary_dns/outgoing/status',
  operationId: 'secondary-dns-(-primary-zone)-get-outgoing-zone-transfer-status',
};

export const tool: Tool = {
  name: 'get_outgoing_zone_transfers_dns_status',
  description: 'Get primary zone transfer status.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.dns.zoneTransfers.outgoing.status.get(body);
};

export default { metadata, tool, handler };
