// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.policies',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/access/policies/{policy_id}',
  operationId: 'access-policies-delete-an-access-reusable-policy',
};

export const tool: Tool = {
  name: 'delete_access_zero_trust_policies',
  description: 'Deletes an Access reusable policy.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.access.policies.delete(policy_id, body));
};

export default { metadata, tool, handler };
