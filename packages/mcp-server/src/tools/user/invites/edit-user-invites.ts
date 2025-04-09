// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.invites',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_user_invites',
  description: 'Responds to an invitation.',
  inputSchema: {
    type: 'object',
    properties: {
      invite_id: {
        type: 'string',
        description: 'Invite identifier tag.',
      },
      status: {
        type: 'string',
        description: 'Status of your response to the invitation (rejected or accepted).',
        enum: ['accepted', 'rejected'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { invite_id, ...body } = args;
  return client.user.invites.edit(invite_id, body);
};

export default { metadata, tool, handler };
