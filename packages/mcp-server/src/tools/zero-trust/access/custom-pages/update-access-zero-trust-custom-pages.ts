// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.custom_pages',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/access/custom_pages/{custom_page_id}',
  operationId: 'access-custom-pages-update-a-custom-page',
};

export const tool: Tool = {
  name: 'update_access_zero_trust_custom_pages',
  description: 'Update a custom page',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      custom_page_id: {
        type: 'string',
        description: 'UUID.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { custom_page_id, ...body } = args as any;
  return client.zeroTrust.access.customPages.update(custom_page_id, body);
};

export default { metadata, tool, handler };
