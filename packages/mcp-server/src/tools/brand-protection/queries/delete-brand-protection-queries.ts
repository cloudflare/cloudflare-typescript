// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'brand_protection.queries',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/brand-protection/queries',
};

export const tool: Tool = {
  name: 'delete_brand_protection_queries',
  description: 'Return a success message after deleting saved string queries by ID',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      scan: {
        type: 'boolean',
      },
      tag: {
        type: 'string',
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
  const response = await client.brandProtection.queries.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
