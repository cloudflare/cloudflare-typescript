// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications.policy_tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/policy-tests/{policy_test_id}',
  operationId: 'access-policy-tests-get-an-update',
};

export const tool: Tool = {
  name: 'get_applications_access_zero_trust_policy_tests',
  description: 'Fetches the current status of a given Access policy test.',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_test_id, ...body } = args as any;
  return asTextContentResult(
    await client.zeroTrust.access.applications.policyTests.get(policy_test_id, body),
  );
};

export default { metadata, tool, handler };
