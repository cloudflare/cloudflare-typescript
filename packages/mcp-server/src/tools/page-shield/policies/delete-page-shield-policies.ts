// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.policies',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/page_shield/policies/{policy_id}',
  operationId: 'page-shield-delete-policy',
};

export const tool: Tool = {
  name: 'delete_page_shield_policies',
  description: 'Delete a Page Shield policy by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      policy_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
    required: ['zone_id', 'policy_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  const response = await client.pageShield.policies.delete(policy_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
