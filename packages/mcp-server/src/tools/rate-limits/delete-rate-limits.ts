// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rate_limits',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_rate_limits',
  description: 'Deletes an existing rate limit.',
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
  return client.rateLimits.delete(rate_limit_id, body);
};

export default { metadata, tool, handler };
