// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/pcaps/{pcap_id}/stop',
  operationId: 'magic-pcap-collection-stop-full-pcap',
};

export const tool: Tool = {
  name: 'stop_magic_transit_pcaps',
  description: 'Stop full PCAP',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pcap_id, ...body } = args as any;
  return client.magicTransit.pcaps.stop(pcap_id, body);
};

export default { metadata, tool, handler };
