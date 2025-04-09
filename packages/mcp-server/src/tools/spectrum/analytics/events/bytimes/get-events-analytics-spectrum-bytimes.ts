// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'spectrum.analytics.events.bytimes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_events_analytics_spectrum_bytimes',
  description: 'Retrieves a list of aggregate metrics grouped by time interval.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      time_delta: {
        type: 'string',
        description: 'Used to select time series resolution.',
        enum: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'dekaminute', 'minute'],
      },
      dimensions: {
        type: 'array',
        description:
          'Can be used to break down the data by given attributes. Options are: \n\nDimension                 | Name                            | Example\n--------------------------|---------------------------------|--------------------------\nevent                     | Connection Event                | connect, progress, disconnect, originError, clientFiltered\nappID                     | Application ID                  | 40d67c87c6cd4b889a4fd57805225e85\ncoloName                  | Colo Name                       | SFO\nipVersion                 | IP version used by the client   | 4, 6.',
        items: {
          type: 'string',
          enum: ['event', 'appID', 'coloName', 'ipVersion'],
        },
      },
      filters: {
        type: 'string',
        description:
          'Used to filter rows by one or more dimensions. Filters can be combined using OR and AND boolean logic. AND takes precedence over OR in all the expressions. The OR operator is defined using a comma (,) or OR keyword surrounded by whitespace. The AND operator is defined using a semicolon (;) or AND keyword surrounded by whitespace. Note that the semicolon is a reserved character in URLs (rfc1738) and needs to be percent-encoded as %3B. Comparison options are:\n\nOperator                  | Name                            | URL Encoded\n--------------------------|---------------------------------|--------------------------\n==                        | Equals                          | %3D%3D\n!=                        | Does not equals                 | !%3D\n\\>                        | Greater Than                    | %3E\n\\<                        | Less Than                       | %3C\n\\>=                       | Greater than or equal to        | %3E%3D\n\\<=                       | Less than or equal to           | %3C%3D',
      },
      metrics: {
        type: 'array',
        description:
          'One or more metrics to compute. Options are: \n\nMetric                    | Name                                | Example                  | Unit\n--------------------------|-------------------------------------|--------------------------|--------------------------\ncount                     | Count of total events               | 1000                     | Count\nbytesIngress              | Sum of ingress bytes                | 1000                     | Sum\nbytesEgress               | Sum of egress bytes                 | 1000                     | Sum\ndurationAvg               | Average connection duration         | 1.0                      | Time in milliseconds\ndurationMedian            | Median connection duration          | 1.0                      | Time in milliseconds\nduration90th              | 90th percentile connection duration | 1.0                      | Time in milliseconds\nduration99th              | 99th percentile connection duration | 1.0                      | Time in milliseconds.',
        items: {
          type: 'string',
          enum: [
            'count',
            'bytesIngress',
            'bytesEgress',
            'durationAvg',
            'durationMedian',
            'duration90th',
            'duration99th',
          ],
        },
      },
      since: {
        type: 'string',
        description:
          'Start of time interval to query, defaults to `until` - 6 hours. Timestamp must be in RFC3339 format and uses UTC unless otherwise specified.',
        format: 'date-time',
      },
      sort: {
        type: 'array',
        description:
          'The sort order for the result set; sort fields must be included in `metrics` or `dimensions`.',
        items: {
          type: 'string',
        },
      },
      until: {
        type: 'string',
        description:
          'End of time interval to query, defaults to current time. Timestamp must be in RFC3339 format and uses UTC unless otherwise specified.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.spectrum.analytics.events.bytimes.get(body);
};

export default { metadata, tool, handler };
