// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications.policies',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_applications_access_zero_trust_policies',
  description:
    'Fetches a single Access policy configured for an application. Returns both exclusively owned and reusable policies used by the application.',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        description: 'UUID.',
      },
      policy_id: {
        type: 'string',
        description: 'UUID.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_id, ...body } = args;
  return client.zeroTrust.access.applications.policies.get(policy_id, body);
};

export default { metadata, tool, handler };
