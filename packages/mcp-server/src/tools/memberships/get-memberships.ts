// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/memberships/{membership_id}',
  operationId: "user'-s-account-memberships-membership-details",
};

export const tool: Tool = {
  name: 'get_memberships',
  description: 'Get a specific membership.',
  inputSchema: {
    type: 'object',
    properties: {
      membership_id: {
        type: 'string',
        description: 'Membership identifier tag.',
      },
    },
    required: ['membership_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { membership_id, ...body } = args as any;
  return asTextContentResult(await client.memberships.get(membership_id));
};

export default { metadata, tool, handler };
