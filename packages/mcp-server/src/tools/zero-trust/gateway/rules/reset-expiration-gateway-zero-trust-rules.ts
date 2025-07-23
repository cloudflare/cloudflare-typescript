// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/gateway/rules/{rule_id}/reset_expiration',
  operationId: 'zero-trust-gateway-rules-reset-expiration-zero-trust-gateway-rule',
};

export const tool: Tool = {
  name: 'reset_expiration_gateway_zero_trust_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nResets the expiration of a Zero Trust Gateway Rule if its duration has elapsed and it has a default duration.\n\nThe Zero Trust Gateway Rule must have values for both `expiration.expires_at` and `expiration.duration`.\n",
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.gateway.rules.resetExpiration(rule_id, body));
};

export default { metadata, tool, handler };
