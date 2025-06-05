// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.traffic_anomalies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/traffic_anomalies',
  operationId: 'radar-get-traffic-anomalies',
};

export const tool: Tool = {
  name: 'get_radar_traffic_anomalies',
  description:
    'Retrieves the latest Internet traffic anomalies, which are signals that might indicate an outage. These alerts are automatically detected by Radar and manually verified by our team.',
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description:
          'Filters results by Autonomous System. Specify a single Autonomous System Number (ASN) as integer.',
      },
      dateEnd: {
        type: 'string',
        description: 'End of the date range (inclusive).',
        format: 'date-time',
      },
      dateRange: {
        type: 'string',
        description: 'Filters results by date range.',
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
        description: 'Filters results by location. Specify an alpha-2 location code.',
      },
      offset: {
        type: 'integer',
        description: 'Skips the specified number of objects before fetching the results.',
      },
      status: {
        type: 'string',
        enum: ['VERIFIED', 'UNVERIFIED'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.radar.trafficAnomalies.get(body));
};

export default { metadata, tool, handler };
