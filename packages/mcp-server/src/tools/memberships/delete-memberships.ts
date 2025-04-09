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
  name: 'delete_memberships',
  description: 'Remove the associated member from an account.',
  inputSchema: {
    type: 'object',
    properties: {
      membership_id: {
        type: 'string',
        description: 'Membership identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { membership_id } = args;
  return client.memberships.delete(membership_id);
};

export default { metadata, tool, handler };
