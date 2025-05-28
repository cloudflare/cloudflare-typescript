// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.bgp_prefixes',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}',
  operationId: 'ip-address-management-prefixes-update-bgp-prefix',
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
      asn_prepend_count: {
        type: 'integer',
        description: 'Number of times to prepend the Cloudflare ASN to the BGP AS-Path attribute',
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
      withdraw_if_no_route: {
        type: 'boolean',
        description:
          'Controls whether the BGP prefix is automatically withdrawn when prefix is withdrawn from Magic routing table (for Magic Transit customers using Direct CNI)',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bgp_prefix_id, ...body } = args as any;
  return client.addressing.prefixes.bgpPrefixes.edit(bgp_prefix_id, body);
};

export default { metadata, tool, handler };
