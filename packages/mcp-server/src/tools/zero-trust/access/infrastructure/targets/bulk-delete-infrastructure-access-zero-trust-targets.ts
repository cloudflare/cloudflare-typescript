// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.infrastructure.targets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/infrastructure/targets/batch',
  operationId: 'infra-targets-delete-batch',
};

export const tool: Tool = {
  name: 'bulk_delete_infrastructure_access_zero_trust_targets',
  description: 'Removes one or more targets.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account identifier',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.access.infrastructure.targets.bulkDelete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
