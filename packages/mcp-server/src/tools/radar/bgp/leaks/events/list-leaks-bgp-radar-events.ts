// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.leaks.events',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_leaks_bgp_radar_events',
  description: 'Retrieves the BGP route leak events.',
  inputSchema: {
    type: 'object',
    properties: {
      dateEnd: {
        type: 'string',
        description: 'End of the date range (inclusive).',
        format: 'date-time',
      },
      dateRange: {
        type: 'string',
        description:
          "Shorthand date ranges for the last X days - use when you don't need specific start and end dates.",
      },
      dateStart: {
        type: 'string',
        description: 'Start of the date range (inclusive).',
        format: 'date-time',
      },
      eventId: {
        type: 'integer',
        description: 'The unique identifier of a event.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      involvedAsn: {
        type: 'integer',
        description: 'ASN that is causing or affected by a route leak event.',
      },
      involvedCountry: {
        type: 'string',
        description: 'Country code of a involved ASN in a route leak event.',
      },
      leakAsn: {
        type: 'integer',
        description: 'The leaking AS of a route leak event.',
      },
      page: {
        type: 'integer',
        description: 'Current page number, starting from 1.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of entries per page.',
      },
      sortBy: {
        type: 'string',
        description: 'Sorts results by the specified field.',
        enum: ['ID', 'LEAKS', 'PEERS', 'PREFIXES', 'ORIGINS', 'TIME'],
      },
      sortOrder: {
        type: 'string',
        description: 'Sort order.',
        enum: ['ASC', 'DESC'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.bgp.leaks.events.list(body);
};

export default { metadata, tool, handler };
