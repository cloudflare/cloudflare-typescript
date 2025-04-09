// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps.download',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_pcaps_magic_transit_download',
  description: 'Download PCAP information into a file. Response is a binary PCAP file.',
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
  return client.magicTransit.pcaps.download.get(pcap_id, body);
};

export default { metadata, tool, handler };
