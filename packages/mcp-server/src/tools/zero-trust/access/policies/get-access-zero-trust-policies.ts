// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.policies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/policies/{policy_id}',
  operationId: 'access-policies-get-an-access-reusable-policy',
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
    required: ['account_id', 'policy_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.access.policies.get(policy_id, body));
};

export default { metadata, tool, handler };
