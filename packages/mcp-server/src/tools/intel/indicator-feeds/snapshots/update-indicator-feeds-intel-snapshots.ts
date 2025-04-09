// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.indicator_feeds.snapshots',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_indicator_feeds_intel_snapshots',
  description: 'Update indicator feed data',
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
      source: {
        type: 'string',
        description: 'The file to upload',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { feed_id, ...body } = args;
  return client.intel.indicatorFeeds.snapshots.update(feed_id, body);
};

export default { metadata, tool, handler };
