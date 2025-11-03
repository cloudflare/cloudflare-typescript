// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'token_validation.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/token_validation/rules/{rule_id}',
  operationId: 'token-validation-rules-delete',
};

export const tool: Tool = {
  name: 'delete_token_validation_rules',
  description: 'Delete a zone token validation rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      rule_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
    required: ['zone_id', 'rule_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult((await client.tokenValidation.rules.delete(rule_id, body)) as object);
};

export default { metadata, tool, handler };
