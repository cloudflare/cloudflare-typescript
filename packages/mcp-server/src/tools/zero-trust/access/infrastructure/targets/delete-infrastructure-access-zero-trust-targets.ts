// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.infrastructure.targets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/infrastructure/targets/{target_id}',
  operationId: 'infra-targets-delete',
};

export const tool: Tool = {
  name: 'delete_infrastructure_access_zero_trust_targets',
  description: 'Delete target',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account identifier',
      },
      target_id: {
        type: 'string',
        title: 'target_id',
        description: 'Target identifier',
      },
    },
    required: ['account_id', 'target_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { target_id, ...body } = args as any;
  const response = await client.zeroTrust.access.infrastructure.targets.delete(target_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
