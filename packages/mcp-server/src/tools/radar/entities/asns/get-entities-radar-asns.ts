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
  name: 'get_entities_radar_asns',
  description:
    'Retrieves the requested autonomous system information. (A confidence level below `5` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this AS). Population estimates come from APNIC (refer to https://labs.apnic.net/?p=526).',
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description: 'Single Autonomous System Number (ASN) as integer.',
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
  return client.radar.entities.asns.get(asn, body);
};

export default { metadata, tool, handler };
