// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.limits',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_dlp_zero_trust_limits',
  description: 'Fetch limits associated with DLP for account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dlp.limits.list(body);
};

export default { metadata, tool, handler };
