// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.entities.asns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/entities/asns',
  operationId: 'radar-get-entities-asn-list',
};

export const tool: Tool = {
  name: 'list_entities_radar_asns',
  description: 'Retrieves a list of autonomous systems.',
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'string',
        description:
          'Filters results by Autonomous System. Specify one or more Autonomous System Numbers (ASNs) as a comma-separated list.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      location: {
        type: 'string',
        description: 'Filters results by location. Specify an alpha-2 location code.',
      },
      offset: {
        type: 'integer',
        description: 'Skips the specified number of objects before fetching the results.',
      },
      orderBy: {
        type: 'string',
        description: 'Specifies the metric to order the ASNs by.',
        enum: ['ASN', 'POPULATION'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.radar.entities.asns.list(body);
};

export default { metadata, tool, handler };
