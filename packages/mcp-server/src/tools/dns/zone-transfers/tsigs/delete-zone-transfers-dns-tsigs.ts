// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.tsigs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/secondary_dns/tsigs/{tsig_id}',
  operationId: 'secondary-dns-(-tsig)-delete-tsig',
};

export const tool: Tool = {
  name: 'delete_zone_transfers_dns_tsigs',
  description: 'Delete TSIG.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tsig_id, ...body } = args as any;
  return asTextContentResult(await client.dns.zoneTransfers.tsigs.delete(tsig_id, body));
};

export default { metadata, tool, handler };
