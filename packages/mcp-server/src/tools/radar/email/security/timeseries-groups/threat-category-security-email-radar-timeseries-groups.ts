// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.email.security.timeseries_groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'threat_category_security_email_radar_timeseries_groups',
  description: 'Retrieves the distribution of emails by threat category over time.',
  inputSchema: {
    type: 'object',
    properties: {
      aggInterval: {
        type: 'string',
        description:
          'Aggregation interval results should be returned in (for example, in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).',
        enum: ['15m', '1h', '1d', '1w'],
      },
      arc: {
        type: 'array',
        description: 'Filters results by ARC (Authenticated Received Chain) validation.',
        items: {
          type: 'string',
          enum: ['PASS', 'NONE', 'FAIL'],
        },
      },
      dateEnd: {
        type: 'array',
        description: 'End of the date range (inclusive).',
        items: {
          type: 'string',
          format: 'date-time',
        },
      },
      dateRange: {
        type: 'array',
        description:
          'Filters results by the specified date range. For example, use `7d` and `7dcontrol` to compare this week with the previous week. Use this parameter or set specific start and end dates (`dateStart` and `dateEnd` parameters).',
        items: {
          type: 'string',
        },
      },
      dateStart: {
        type: 'array',
        description: 'Start of the date range.',
        items: {
          type: 'string',
          format: 'date-time',
        },
      },
      dkim: {
        type: 'array',
        description: 'Filters results by DKIM (DomainKeys Identified Mail) validation status.',
        items: {
          type: 'string',
          enum: ['PASS', 'NONE', 'FAIL'],
        },
      },
      dmarc: {
        type: 'array',
        description:
          'Filters results by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation status.',
        items: {
          type: 'string',
          enum: ['PASS', 'NONE', 'FAIL'],
        },
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      name: {
        type: 'array',
        description: 'Array of names used to label the series in the response.',
        items: {
          type: 'string',
        },
      },
      spf: {
        type: 'array',
        description: 'Filters results by SPF (Sender Policy Framework) validation status.',
        items: {
          type: 'string',
          enum: ['PASS', 'NONE', 'FAIL'],
        },
      },
      tlsVersion: {
        type: 'array',
        description: 'Filters results by TLS version.',
        items: {
          type: 'string',
          enum: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2', 'TLSv1_3'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.email.security.timeseriesGroups.threatCategory(body);
};

export default { metadata, tool, handler };
