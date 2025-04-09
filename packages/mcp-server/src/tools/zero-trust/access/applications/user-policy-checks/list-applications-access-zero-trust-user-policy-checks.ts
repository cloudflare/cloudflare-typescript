// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications.user_policy_checks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_applications_access_zero_trust_user_policy_checks',
  description: 'Tests if a specific user has permission to access an application.',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        description: 'Identifier.',
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
  const { app_id, ...body } = args;
  return client.zeroTrust.access.applications.userPolicyChecks.list(app_id, body);
};

export default { metadata, tool, handler };
