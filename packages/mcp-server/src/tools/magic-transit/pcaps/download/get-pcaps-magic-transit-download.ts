// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps.download',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pcaps/{pcap_id}/download',
  operationId: 'magic-pcap-collection-download-simple-pcap',
};

export const tool: Tool = {
  name: 'get_pcaps_magic_transit_download',
  description: 'Download PCAP information into a file. Response is a binary PCAP file.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      pcap_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
    required: ['account_id', 'pcap_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pcap_id, ...body } = args as any;
  return asBinaryContentResult(await client.magicTransit.pcaps.download.get(pcap_id, body));
};

export default { metadata, tool, handler };
