// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.incoming',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/secondary_dns/incoming',
  operationId: 'secondary-dns-(-secondary-zone)-update-secondary-zone-configuration',
};

export const tool: Tool = {
  name: 'update_zone_transfers_dns_incoming',
  description: 'Update secondary zone configuration for incoming zone transfers.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.dns.zoneTransfers.incoming.update(body));
};

export default { metadata, tool, handler };
