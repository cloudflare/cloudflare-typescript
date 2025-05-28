// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.invites',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/invites/{invite_id}',
  operationId: "user'-s-invites-invitation-details",
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { invite_id, ...body } = args as any;
  return client.user.invites.get(invite_id);
};

export default { metadata, tool, handler };
