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
  name: 'get_user_invites',
  description: 'Gets the details of an invitation.',
  inputSchema: {
    type: 'object',
    properties: {
      invite_id: {
        type: 'string',
        description: 'Invite identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { invite_id } = args;
  return client.user.invites.get(invite_id);
};

export default { metadata, tool, handler };
