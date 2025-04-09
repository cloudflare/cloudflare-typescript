// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.bgp_prefixes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_prefixes_addressing_bgp_prefixes',
  description: 'Retrieve a single BGP Prefix according to its identifier',
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
      bgp_prefix_id: {
        type: 'string',
        description: 'Identifier of BGP Prefix.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { bgp_prefix_id, ...body } = args;
  return client.addressing.prefixes.bgpPrefixes.get(bgp_prefix_id, body);
};

export default { metadata, tool, handler };
