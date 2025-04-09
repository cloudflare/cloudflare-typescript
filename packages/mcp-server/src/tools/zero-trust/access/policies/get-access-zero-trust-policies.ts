// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.policies',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_access_zero_trust_policies',
  description: 'Fetches a single Access reusable policy.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      policy_id: {
        type: 'string',
        description: 'The UUID of the policy',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_id, ...body } = args;
  return client.zeroTrust.access.policies.get(policy_id, body);
};

export default { metadata, tool, handler };
