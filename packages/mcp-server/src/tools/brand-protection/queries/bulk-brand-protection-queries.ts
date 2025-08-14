// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'brand_protection.queries',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/brand-protection/queries/bulk',
};

export const tool: Tool = {
  name: 'bulk_brand_protection_queries',
  description: 'Return a success message after creating new saved string queries in bulk',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      queries: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: true,
        },
      },
    },
    required: ['account_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.brandProtection.queries.bulk(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
