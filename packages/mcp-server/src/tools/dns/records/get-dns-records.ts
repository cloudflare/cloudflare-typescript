// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.records',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/dns_records/{dns_record_id}',
  operationId: 'dns-records-for-a-zone-dns-record-details',
};

export const tool: Tool = {
  name: 'get_dns_records',
  description: 'DNS Record Details',
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
    required: ['zone_id', 'dns_record_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dns_record_id, ...body } = args as any;
  return asTextContentResult(await client.dns.records.get(dns_record_id, body));
};

export default { metadata, tool, handler };
