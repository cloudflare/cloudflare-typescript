// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps.ownership',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_pcaps_magic_transit_ownership',
  description: 'Deletes buckets added to the packet captures API.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      ownership_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ownership_id, ...body } = args;
  return client.magicTransit.pcaps.ownership.delete(ownership_id, body);
};

export default { metadata, tool, handler };
