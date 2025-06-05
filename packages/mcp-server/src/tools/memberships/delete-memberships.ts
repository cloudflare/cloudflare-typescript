// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/memberships/{membership_id}',
  operationId: "user'-s-account-memberships-delete-membership",
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { membership_id, ...body } = args as any;
  return asTextContentResult(await client.memberships.delete(membership_id));
};

export default { metadata, tool, handler };
