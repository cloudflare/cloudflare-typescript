// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.billing.profile',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/billing/profile',
  operationId: 'user-billing-profile-(-deprecated)-billing-profile-details',
};

export const tool: Tool = {
  name: 'get_billing_user_profile',
  description: 'Accesses your billing profile object.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.user.billing.profile.get());
};

export default { metadata, tool, handler };
