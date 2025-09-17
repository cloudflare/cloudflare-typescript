// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    required: ['account_id', 'pcap_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pcap_id, ...body } = args as any;
  const response = await client.magicTransit.pcaps.stop(pcap_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
