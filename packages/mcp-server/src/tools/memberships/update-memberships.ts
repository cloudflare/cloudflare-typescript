// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/memberships/{membership_id}',
  operationId: "user'-s-account-memberships-update-membership",
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
    required: ['membership_id', 'status'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { membership_id, ...body } = args as any;
  return asTextContentResult(await client.memberships.update(membership_id, body));
};

export default { metadata, tool, handler };
