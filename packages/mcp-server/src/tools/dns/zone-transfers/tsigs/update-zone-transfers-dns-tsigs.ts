// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.tsigs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/secondary_dns/tsigs/{tsig_id}',
  operationId: 'secondary-dns-(-tsig)-update-tsig',
};

export const tool: Tool = {
  name: 'update_zone_transfers_dns_tsigs',
  description: 'Modify TSIG.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      tsig_id: {
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tsig_id, ...body } = args as any;
  return asTextContentResult(await client.dns.zoneTransfers.tsigs.update(tsig_id, body));
};

export default { metadata, tool, handler };
