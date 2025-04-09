// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.indicator_feeds.downloads',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_indicator_feeds_intel_downloads',
  description: 'Download indicator feed data',
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

export const handler = (client: Cloudflare, args: any) => {
  const { feed_id, ...body } = args;
  return client.intel.indicatorFeeds.downloads.get(feed_id, body);
};

export default { metadata, tool, handler };
