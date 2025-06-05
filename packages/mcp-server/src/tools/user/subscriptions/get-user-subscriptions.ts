// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/subscriptions',
  operationId: 'user-subscription-get-user-subscriptions',
};

export const tool: Tool = {
  name: 'get_user_subscriptions',
  description: "Lists all of a user's subscriptions.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.user.subscriptions.get());
};

export default { metadata, tool, handler };
