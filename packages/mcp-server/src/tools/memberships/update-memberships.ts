// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_memberships',
  description: 'Accept or reject this account invitation.',
  inputSchema: {
    type: 'object',
    properties: {
      membership_id: {
        type: 'string',
        description: 'Membership identifier tag.',
      },
      status: {
        type: 'string',
        description: 'Whether to accept or reject this account invitation.',
        enum: ['accepted', 'rejected'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { membership_id, ...body } = args;
  return client.memberships.update(membership_id, body);
};

export default { metadata, tool, handler };
