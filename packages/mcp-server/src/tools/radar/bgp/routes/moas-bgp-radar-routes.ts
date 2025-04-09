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
  name: 'moas_bgp_radar_routes',
  description: 'Retrieves all Multi-Origin AS (MOAS) prefixes in the global routing tables.',
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      invalid_only: {
        type: 'boolean',
        description: 'Lookup only RPKI invalid MOASes.',
      },
      origin: {
        type: 'integer',
        description: 'Lookup MOASes originated by the given ASN.',
      },
      prefix: {
        type: 'string',
        description: 'Network prefix, IPv4 or IPv6.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.bgp.routes.moas(body);
};

export default { metadata, tool, handler };
