// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.billing.profile',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_billing_user_profile',
  description: 'Accesses your billing profile object.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const {} = args;
  return client.user.billing.profile.get();
};

export default { metadata, tool, handler };
