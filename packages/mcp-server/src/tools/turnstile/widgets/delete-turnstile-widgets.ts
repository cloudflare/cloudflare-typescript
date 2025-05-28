// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'turnstile.widgets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/challenges/widgets/{sitekey}',
  operationId: 'accounts-turnstile-widget-delete',
};

export const tool: Tool = {
  name: 'delete_turnstile_widgets',
  description: 'Destroy a Turnstile Widget.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      sitekey: {
        type: 'string',
        description: 'Widget item identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sitekey, ...body } = args as any;
  return client.turnstile.widgets.delete(sitekey, body);
};

export default { metadata, tool, handler };
