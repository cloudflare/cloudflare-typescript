// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.analytics.reports',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_analytics_dns_reports',
  description:
    'Retrieves a list of summarised aggregate metrics over a given time period.\n\nSee [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      dimensions: {
        type: 'string',
        description: 'A comma-separated list of dimensions to group results by.',
      },
      filters: {
        type: 'string',
        description: "Segmentation filter in 'attribute operator value' format.",
      },
      limit: {
        type: 'integer',
        description: 'Limit number of returned metrics.',
      },
      metrics: {
        type: 'string',
        description: 'A comma-separated list of metrics to query.',
      },
      since: {
        type: 'string',
        description: 'Start date and time of requesting data period in ISO 8601 format.',
        format: 'date-time',
      },
      sort: {
        type: 'string',
        description:
          'A comma-separated list of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending).',
      },
      until: {
        type: 'string',
        description: 'End date and time of requesting data period in ISO 8601 format.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.analytics.reports.get(body);
};

export default { metadata, tool, handler };
