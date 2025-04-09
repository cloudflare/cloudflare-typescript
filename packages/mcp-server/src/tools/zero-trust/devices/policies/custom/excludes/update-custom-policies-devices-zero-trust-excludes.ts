// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.custom.excludes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_custom_policies_devices_zero_trust_excludes',
  description:
    "Sets the list of routes excluded from the WARP client's tunnel for a specific device settings profile.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      policy_id: {
        type: 'string',
      },
      body: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                address: {
                  type: 'string',
                  description:
                    'The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.',
                },
                description: {
                  type: 'string',
                  description: 'A description of the Split Tunnel item, displayed in the client UI.',
                },
              },
              required: ['address'],
            },
            {
              type: 'object',
              properties: {
                host: {
                  type: 'string',
                  description:
                    'The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.',
                },
                description: {
                  type: 'string',
                  description: 'A description of the Split Tunnel item, displayed in the client UI.',
                },
              },
              required: ['host'],
            },
          ],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_id, ...body } = args;
  return client.zeroTrust.devices.policies.custom.excludes.update(policy_id, body);
};

export default { metadata, tool, handler };
