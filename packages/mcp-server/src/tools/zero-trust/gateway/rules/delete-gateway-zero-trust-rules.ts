// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/gateway/rules/{rule_id}',
  operationId: 'zero-trust-gateway-rules-delete-zero-trust-gateway-rule',
};

export const tool: Tool = {
  name: 'delete_gateway_zero_trust_rules',
  description: 'Deletes a Zero Trust Gateway rule.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
        description: 'The API resource UUID.',
      },
    },
    required: ['account_id', 'rule_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult((await client.zeroTrust.gateway.rules.delete(rule_id, body)) as object);
};

export default { metadata, tool, handler };
