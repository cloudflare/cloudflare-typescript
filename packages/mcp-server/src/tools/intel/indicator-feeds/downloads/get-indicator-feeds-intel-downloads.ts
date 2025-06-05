// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.indicator_feeds.downloads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/indicator_feeds/{feed_id}/download',
  operationId: 'custom-indicator-feeds-download-indicator-feed-data',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { feed_id, ...body } = args as any;
  return asTextContentResult(await client.intel.indicatorFeeds.downloads.get(feed_id, body));
};

export default { metadata, tool, handler };
