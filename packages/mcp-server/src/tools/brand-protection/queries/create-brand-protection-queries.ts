// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'brand_protection.queries',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/brand-protection/queries',
};

export const tool: Tool = {
  name: 'create_brand_protection_queries',
  description: 'Return a success message after creating new saved string queries',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      query_scan: {
        type: 'boolean',
      },
      query_tag: {
        type: 'string',
      },
      max_time: {
        type: 'string',
        format: 'date-time',
      },
      min_time: {
        type: 'string',
        format: 'date-time',
      },
      body_scan: {
        type: 'boolean',
      },
      string_matches: {
        type: 'object',
      },
      body_tag: {
        type: 'string',
      },
    },
    required: ['account_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.brandProtection.queries.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
