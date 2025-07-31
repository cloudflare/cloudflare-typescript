// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'brand_protection.logos',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/brand-protection/logos/{logo_id}',
};

export const tool: Tool = {
  name: 'delete_brand_protection_logos',
  description: 'Return a success message after deleting saved logo queries by ID',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      logo_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'logo_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { logo_id, ...body } = args as any;
  const response = await client.brandProtection.logos.delete(logo_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
