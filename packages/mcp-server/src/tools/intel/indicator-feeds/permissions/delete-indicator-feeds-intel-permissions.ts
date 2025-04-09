// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.indicator_feeds.permissions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_indicator_feeds_intel_permissions',
  description: 'Revoke permission to indicator feed',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      account_tag: {
        type: 'string',
        description: 'The Cloudflare account tag of the account to change permissions on',
      },
      feed_id: {
        type: 'integer',
        description: 'The ID of the feed to add/remove permissions on',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.indicatorFeeds.permissions.delete(body);
};

export default { metadata, tool, handler };
