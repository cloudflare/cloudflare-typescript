// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.connectivity_settings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/zerotrust/connectivity_settings',
  operationId: 'zero-trust-accounts-patch-connectivity-settings',
};

export const tool: Tool = {
  name: 'edit_zero_trust_connectivity_settings',
  description: 'Updates the Zero Trust Connectivity Settings for the given account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      icmp_proxy_enabled: {
        type: 'boolean',
        description: 'A flag to enable the ICMP proxy for the account network.',
      },
      offramp_warp_enabled: {
        type: 'boolean',
        description: 'A flag to enable WARP to WARP traffic.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.connectivitySettings.edit(body);
};

export default { metadata, tool, handler };
