// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.records',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/dns_records/{dns_record_id}',
  operationId: 'dns-records-for-a-zone-delete-dns-record',
};

export const tool: Tool = {
  name: 'delete_dns_records',
  description: 'Delete DNS Record',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      dns_record_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dns_record_id, ...body } = args as any;
  return asTextContentResult(await client.dns.records.delete(dns_record_id, body));
};

export default { metadata, tool, handler };
