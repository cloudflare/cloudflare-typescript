// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'turnstile.widgets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/challenges/widgets/{sitekey}',
  operationId: 'accounts-turnstile-widget-get',
};

export const tool: Tool = {
  name: 'get_turnstile_widgets',
  description: 'Show a single challenge widget configuration.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sitekey, ...body } = args as any;
  return asTextContentResult(await client.turnstile.widgets.get(sitekey, body));
};

export default { metadata, tool, handler };
