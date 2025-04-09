// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.default.fallback_domains',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_default_policies_devices_zero_trust_fallback_domains',
  description:
    'Fetches a list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead.',
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
  return client.zeroTrust.devices.policies.default.fallbackDomains.get(body);
};

export default { metadata, tool, handler };
