// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.bgp_prefixes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_prefixes_addressing_bgp_prefixes',
  description:
    'Create a BGP prefix, controlling the BGP advertisement status of a specific subnet. When created, BGP prefixes are initially withdrawn, and can be advertised with the Update BGP Prefix API.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      prefix_id: {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
      },
      cidr: {
        type: 'string',
        description: 'IP Prefix in Classless Inter-Domain Routing format.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { prefix_id, ...body } = args;
  return client.addressing.prefixes.bgpPrefixes.create(prefix_id, body);
};

export default { metadata, tool, handler };
