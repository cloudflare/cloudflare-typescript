// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.annotations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_radar_annotations',
  description: 'Retrieves the latest annotations.',
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description: 'Single Autonomous System Number (ASN) as integer.',
      },
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
        description: 'Location alpha-2 code.',
      },
      offset: {
        type: 'integer',
        description: 'Skips the specified number of objects before fetching the results.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.annotations.list(body);
};

export default { metadata, tool, handler };
