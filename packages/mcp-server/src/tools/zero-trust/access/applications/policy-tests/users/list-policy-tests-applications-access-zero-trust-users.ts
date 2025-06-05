// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications.policy_tests.users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/policy-tests/{policy_test_id}/users',
  operationId: 'access-policy-tests-get-a-user-page',
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
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
      status: {
        type: 'string',
        description: 'Filter users by their policy evaluation status.',
        enum: ['success', 'fail', 'error'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_test_id, ...body } = args as any;
  return asTextContentResult(
    await client.zeroTrust.access.applications.policyTests.users.list(policy_test_id, body),
  );
};

export default { metadata, tool, handler };
