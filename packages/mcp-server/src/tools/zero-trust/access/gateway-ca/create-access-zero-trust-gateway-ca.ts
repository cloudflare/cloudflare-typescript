// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.gateway_ca',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/access/gateway_ca',
  operationId: 'access-gateway-ca-add-an-SSH-ca',
};

export const tool: Tool = {
  name: 'create_access_zero_trust_gateway_ca',
  description: 'Adds a new SSH Certificate Authority (CA).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.access.gatewayCA.create(body));
};

export default { metadata, tool, handler };
