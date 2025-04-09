// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.indicator_feeds',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_intel_indicator_feeds',
  description: 'Create new indicator feed',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      description: {
        type: 'string',
        description: 'The description of the example test',
      },
      name: {
        type: 'string',
        description: 'The name of the indicator feed',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.indicatorFeeds.create(body);
};

export default { metadata, tool, handler };
