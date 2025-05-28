// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user',
  operationId: 'user-user-details',
};

export const tool: Tool = {
  name: 'get_user',
  description: 'User Details',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  return client.user.get();
};

export default { metadata, tool, handler };
