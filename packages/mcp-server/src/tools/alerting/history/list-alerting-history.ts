// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.history',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_alerting_history',
  description:
    'Gets a list of history records for notifications sent to an account. The records are displayed for last `x` number of days based on the zone plan (free = 30, pro = 30, biz = 30, ent = 90).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
      before: {
        type: 'string',
        description:
          'Limit the returned results to history records older than the specified date. This must be a timestamp that conforms to RFC3339.',
        format: 'date-time',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page.',
      },
      since: {
        type: 'string',
        description:
          'Limit the returned results to history records newer than the specified date. This must be a timestamp that conforms to RFC3339.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.alerting.history.list(body);
};

export default { metadata, tool, handler };
