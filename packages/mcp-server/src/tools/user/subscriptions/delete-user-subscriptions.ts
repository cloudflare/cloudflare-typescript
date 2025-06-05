// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/user/subscriptions/{identifier}',
  operationId: 'user-subscription-delete-user-subscription',
};

export const tool: Tool = {
  name: 'delete_user_subscriptions',
  description: "Deletes a user's subscription.",
  inputSchema: {
    type: 'object',
    properties: {
      identifier: {
        type: 'string',
        description: 'Subscription identifier tag.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, ...body } = args as any;
  return asTextContentResult(await client.user.subscriptions.delete(identifier));
};

export default { metadata, tool, handler };
