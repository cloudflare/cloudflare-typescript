// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.entities.asns',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'rel_entities_radar_asns',
  description: 'Retrieves AS-level relationship for given networks.',
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description: 'Retrieves all ASNs with provider-customer or peering relationships with the given ASN.',
      },
      asn2: {
        type: 'integer',
        description: 'Retrieves the AS relationship of ASN2 with respect to the given ASN.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { asn, ...body } = args;
  return client.radar.entities.asns.rel(asn, body);
};

export default { metadata, tool, handler };
