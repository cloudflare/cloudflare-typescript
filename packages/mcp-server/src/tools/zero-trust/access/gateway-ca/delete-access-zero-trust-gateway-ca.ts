// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.gateway_ca',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/access/gateway_ca/{certificate_id}',
  operationId: 'access-gateway-ca-delete-an-SSH-ca',
};

export const tool: Tool = {
  name: 'delete_access_zero_trust_gateway_ca',
  description: 'Deletes an SSH Certificate Authority.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.access.gatewayCA.delete(certificate_id, body));
};

export default { metadata, tool, handler };
