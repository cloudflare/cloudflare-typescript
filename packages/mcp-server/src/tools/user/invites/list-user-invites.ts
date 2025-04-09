// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.invites',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_user_invites',
  description: 'Lists all invitations associated with my user.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const {} = args;
  return client.user.invites.list();
};

export default { metadata, tool, handler };
