// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.indicator_feeds',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/intel/indicator-feeds/{feed_id}',
  operationId: 'custom-indicator-feeds-update-indicator-feed-metadata',
};

export const tool: Tool = {
  name: 'update_intel_indicator_feeds',
  description: 'Update indicator feed metadata',
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
      description: {
        type: 'string',
        description: 'The new description of the feed',
      },
      is_attributable: {
        type: 'boolean',
        description: 'The new is_attributable value of the feed',
      },
      is_downloadable: {
        type: 'boolean',
        description: 'The new is_downloadable value of the feed',
      },
      is_public: {
        type: 'boolean',
        description: 'The new is_public value of the feed',
      },
      name: {
        type: 'string',
        description: 'The new name of the feed',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { feed_id, ...body } = args as any;
  return asTextContentResult(await client.intel.indicatorFeeds.update(feed_id, body));
};

export default { metadata, tool, handler };
