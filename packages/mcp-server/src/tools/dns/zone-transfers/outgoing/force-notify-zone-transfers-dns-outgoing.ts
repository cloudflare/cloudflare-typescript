// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.outgoing',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/secondary_dns/outgoing/force_notify',
  operationId: 'secondary-dns-(-primary-zone)-force-dns-notify',
};

export const tool: Tool = {
  name: 'force_notify_zone_transfers_dns_outgoing',
  description: 'Notifies the secondary nameserver(s) and clears IXFR backlog of primary zone.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.dns.zoneTransfers.outgoing.forceNotify(body));
};

export default { metadata, tool, handler };
