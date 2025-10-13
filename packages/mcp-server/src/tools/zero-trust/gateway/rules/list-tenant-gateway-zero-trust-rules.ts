// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/rules/tenant',
  operationId: 'zero-trust-gateway-rules-list-zero-trust-gateway-rules-tenant',
};

export const tool: Tool = {
  name: 'list_tenant_gateway_zero_trust_rules',
  description: 'List Zero Trust Gateway rules for the parent account of an account in the MSP configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.gateway.rules.listTenant(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
