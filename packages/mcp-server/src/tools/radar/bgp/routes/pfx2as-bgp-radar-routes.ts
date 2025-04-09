// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.routes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'pfx2as_bgp_radar_routes',
  description: 'Retrieves the prefix-to-ASN mapping from global routing tables.',
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      longestPrefixMatch: {
        type: 'boolean',
        description:
          'Return only results with the longest prefix match for the given prefix. For example, specify a /32 prefix to lookup the origin ASN for an IPv4 address.',
      },
      origin: {
        type: 'integer',
        description: 'Lookup prefixes originated by the given ASN.',
      },
      prefix: {
        type: 'string',
        description: 'Network prefix, IPv4 or IPv6.',
      },
      rpkiStatus: {
        type: 'string',
        description: 'Return only results with matching rpki status: valid, invalid or unknown.',
        enum: ['VALID', 'INVALID', 'UNKNOWN'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.bgp.routes.pfx2as(body);
};

export default { metadata, tool, handler };
