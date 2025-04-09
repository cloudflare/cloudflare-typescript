// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.default.includes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_default_policies_devices_zero_trust_includes',
  description: "Sets the list of routes included in the WARP client's tunnel.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
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
                    'The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present.',
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
                    'The domain name to include in the tunnel. If `host` is present, `address` must not be present.',
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
  const { ...body } = args;
  return client.zeroTrust.devices.policies.default.includes.update(body);
};

export default { metadata, tool, handler };
