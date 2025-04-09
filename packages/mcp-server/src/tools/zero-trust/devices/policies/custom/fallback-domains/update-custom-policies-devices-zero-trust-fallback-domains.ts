// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.custom.fallback_domains',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_custom_policies_devices_zero_trust_fallback_domains',
  description:
    'Sets the list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead. This will only apply to the specified device settings profile.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      policy_id: {
        type: 'string',
      },
      domains: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            suffix: {
              type: 'string',
              description: 'The domain suffix to match when resolving locally.',
            },
            description: {
              type: 'string',
              description: 'A description of the fallback domain, displayed in the client UI.',
            },
            dns_server: {
              type: 'array',
              description: 'A list of IP addresses to handle domain resolution.',
              items: {
                type: 'string',
                description: 'IPv4 or IPv6 address.',
              },
            },
          },
          required: ['suffix'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_id, ...body } = args;
  return client.zeroTrust.devices.policies.custom.fallbackDomains.update(policy_id, body);
};

export default { metadata, tool, handler };
