// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.subscriptions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_user_subscriptions',
  description: "Lists all of a user's subscriptions.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const {} = args;
  return client.user.subscriptions.get();
};

export default { metadata, tool, handler };
