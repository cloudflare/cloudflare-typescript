// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps.ownership',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pcaps/ownership',
  operationId: 'magic-pcap-collection-list-pca-ps-bucket-ownership',
};

export const tool: Tool = {
  name: 'get_pcaps_magic_transit_ownership',
  description: 'List all buckets configured for use with PCAPs API.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.magicTransit.pcaps.ownership.get(body);
};

export default { metadata, tool, handler };
