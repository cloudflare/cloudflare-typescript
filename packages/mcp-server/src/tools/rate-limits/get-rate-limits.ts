// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rate_limits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/rate_limits/{rate_limit_id}',
  operationId: 'rate-limits-for-a-zone-get-a-rate-limit',
};

export const tool: Tool = {
  name: 'get_rate_limits',
  description: 'Fetches the details of a rate limit.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      rate_limit_id: {
        type: 'string',
        description: 'Defines the unique identifier of the rate limit.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rate_limit_id, ...body } = args as any;
  return asTextContentResult(await client.rateLimits.get(rate_limit_id, body));
};

export default { metadata, tool, handler };
