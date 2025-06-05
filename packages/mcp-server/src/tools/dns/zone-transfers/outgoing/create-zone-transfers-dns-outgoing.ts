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
  httpPath: '/zones/{zone_id}/secondary_dns/outgoing',
  operationId: 'secondary-dns-(-primary-zone)-create-primary-zone-configuration',
};

export const tool: Tool = {
  name: 'create_zone_transfers_dns_outgoing',
  description: 'Create primary zone configuration for outgoing zone transfers.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
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
  return asTextContentResult(await client.dns.zoneTransfers.outgoing.create(body));
};

export default { metadata, tool, handler };
