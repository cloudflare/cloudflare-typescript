// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps.ownership',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/pcaps/ownership/{ownership_id}',
  operationId: 'magic-pcap-collection-delete-buckets-for-full-packet-captures',
};

export const tool: Tool = {
  name: 'delete_pcaps_magic_transit_ownership',
  description: 'Deletes buckets added to the packet captures API.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      ownership_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
    required: ['account_id', 'ownership_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ownership_id, ...body } = args as any;
  const response = await client.magicTransit.pcaps.ownership.delete(ownership_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
