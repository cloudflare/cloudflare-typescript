// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rate_limits',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_rate_limits',
  description: 'Fetches the details of a rate limit.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      rate_limit_id: {
        type: 'string',
        description: 'The unique identifier of the rate limit.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rate_limit_id, ...body } = args;
  return client.rateLimits.get(rate_limit_id, body);
};

export default { metadata, tool, handler };
