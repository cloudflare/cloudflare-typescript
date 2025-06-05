// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps.ownership',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/pcaps/ownership/validate',
  operationId: 'magic-pcap-collection-validate-buckets-for-full-packet-captures',
};

export const tool: Tool = {
  name: 'validate_pcaps_magic_transit_ownership',
  description: 'Validates buckets added to the packet captures API.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      destination_conf: {
        type: 'string',
        description: 'The full URI for the bucket. This field only applies to `full` packet captures.',
      },
      ownership_challenge: {
        type: 'string',
        description: 'The ownership challenge filename stored in the bucket.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.magicTransit.pcaps.ownership.validate(body));
};

export default { metadata, tool, handler };
