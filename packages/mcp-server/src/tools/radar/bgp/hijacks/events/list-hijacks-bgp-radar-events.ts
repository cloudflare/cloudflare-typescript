// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.hijacks.events',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_hijacks_bgp_radar_events',
  description: 'Retrieves the BGP hijack events.',
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
      hijackerAsn: {
        type: 'integer',
        description: 'The potential hijacker AS of a BGP hijack event.',
      },
      involvedAsn: {
        type: 'integer',
        description: 'The potential hijacker or victim AS of a BGP hijack event.',
      },
      involvedCountry: {
        type: 'string',
        description: 'The country code of the potential hijacker or victim AS of a BGP hijack event.',
      },
      maxConfidence: {
        type: 'integer',
        description: 'The maximum confidence score to filter events (1-4 low, 5-7 mid, 8+ high).',
      },
      minConfidence: {
        type: 'integer',
        description: 'The minimum confidence score to filter events (1-4 low, 5-7 mid, 8+ high).',
      },
      page: {
        type: 'integer',
        description: 'Current page number, starting from 1.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of entries per page.',
      },
      prefix: {
        type: 'string',
        description: 'Network prefix, IPv4 or IPv6.',
      },
      sortBy: {
        type: 'string',
        description: 'Sorts results by the specified field.',
        enum: ['ID', 'TIME', 'CONFIDENCE'],
      },
      sortOrder: {
        type: 'string',
        description: 'Sort order.',
        enum: ['ASC', 'DESC'],
      },
      victimAsn: {
        type: 'integer',
        description: 'The potential victim AS of a BGP hijack event.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.bgp.hijacks.events.list(body);
};

export default { metadata, tool, handler };
