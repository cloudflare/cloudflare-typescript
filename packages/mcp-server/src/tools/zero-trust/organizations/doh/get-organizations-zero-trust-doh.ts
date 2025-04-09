// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.organizations.doh',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_organizations_zero_trust_doh',
  description: 'Returns the DoH settings for your Zero Trust organization.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.organizations.doh.get(body);
};

export default { metadata, tool, handler };
