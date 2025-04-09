// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications.policy_tests.users',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_policy_tests_applications_access_zero_trust_users',
  description: 'Fetches a single page of user results from an Access policy test.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      policy_test_id: {
        type: 'string',
        description: 'The UUID of the policy test.',
      },
      status: {
        type: 'string',
        description: 'Filter users by their policy evaluation status.',
        enum: ['success', 'fail'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_test_id, ...body } = args;
  return client.zeroTrust.access.applications.policyTests.users.list(policy_test_id, body);
};

export default { metadata, tool, handler };
