// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.custom_pages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/access/custom_pages',
  operationId: 'access-custom-pages-create-a-custom-page',
};

export const tool: Tool = {
  name: 'create_access_zero_trust_custom_pages',
  description: 'Create a custom page',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      custom_html: {
        type: 'string',
        description: 'Custom page HTML.',
      },
      name: {
        type: 'string',
        description: 'Custom page name.',
      },
      type: {
        type: 'string',
        description: 'Custom page type.',
        enum: ['identity_denied', 'forbidden'],
      },
      app_count: {
        type: 'integer',
        description: 'Number of apps the custom page is assigned to.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.access.customPages.create(body));
};

export default { metadata, tool, handler };
