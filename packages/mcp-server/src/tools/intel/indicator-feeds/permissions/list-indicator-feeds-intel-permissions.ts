// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.indicator_feeds.permissions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_indicator_feeds_intel_permissions',
  description: 'List indicator feed permissions',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.indicatorFeeds.permissions.list(body);
};

export default { metadata, tool, handler };
