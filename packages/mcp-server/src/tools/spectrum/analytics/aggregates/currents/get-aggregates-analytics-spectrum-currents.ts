// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'spectrum.analytics.aggregates.currents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/spectrum/analytics/aggregate/current',
  operationId: 'spectrum-aggregate-analytics-get-current-aggregated-analytics',
};

export const tool: Tool = {
  name: 'get_aggregates_analytics_spectrum_currents',
  description:
    'Retrieves analytics aggregated from the last minute of usage on Spectrum applications underneath a given zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      appID: {
        type: 'string',
        description:
          'Comma-delimited list of Spectrum Application Id(s). If provided, the response will be limited to Spectrum Application Id(s) that match.',
      },
      colo_name: {
        type: 'string',
        description: 'Co-location identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.spectrum.analytics.aggregates.currents.get(body));
};

export default { metadata, tool, handler };
