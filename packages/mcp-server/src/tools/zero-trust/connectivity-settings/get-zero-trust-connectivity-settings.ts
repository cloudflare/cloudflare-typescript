// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.connectivity_settings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zero_trust_connectivity_settings',
  description: 'Gets the Zero Trust Connectivity Settings for the given account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.connectivitySettings.get(body);
};

export default { metadata, tool, handler };
