// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.indicator_feeds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/indicator-feeds/{feed_id}',
  operationId: 'custom-indicator-feeds-get-indicator-feed-metadata',
};

export const tool: Tool = {
  name: 'get_intel_indicator_feeds',
  description: 'Get indicator feed metadata',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      feed_id: {
        type: 'integer',
        description: 'Indicator feed ID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { feed_id, ...body } = args as any;
  return client.intel.indicatorFeeds.get(feed_id, body);
};

export default { metadata, tool, handler };
