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
  name: 'edit_prefixes_addressing_bgp_prefixes',
  description:
    'Update the properties of a BGP Prefix, such as the on demand advertisement status (advertised or withdrawn).',
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
      on_demand: {
        type: 'object',
        properties: {
          advertised: {
            type: 'boolean',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { bgp_prefix_id, ...body } = args;
  return client.addressing.prefixes.bgpPrefixes.edit(bgp_prefix_id, body);
};

export default { metadata, tool, handler };
