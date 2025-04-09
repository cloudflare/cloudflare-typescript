// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.custom',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_policies_devices_zero_trust_custom',
  description:
    'Deletes a device settings profile and fetches a list of the remaining profiles for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      policy_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_id, ...body } = args;
  return client.zeroTrust.devices.policies.custom.delete(policy_id, body);
};

export default { metadata, tool, handler };
