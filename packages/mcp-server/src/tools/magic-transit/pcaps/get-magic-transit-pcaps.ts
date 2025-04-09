// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_magic_transit_pcaps',
  description: 'Get information for a PCAP request by id.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      pcap_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { pcap_id, ...body } = args;
  return client.magicTransit.pcaps.get(pcap_id, body);
};

export default { metadata, tool, handler };
