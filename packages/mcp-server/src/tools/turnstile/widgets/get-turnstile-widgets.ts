// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'turnstile.widgets',
  operation: 'read',
  tags: [],
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

export const handler = (client: Cloudflare, args: any) => {
  const { sitekey, ...body } = args;
  return client.turnstile.widgets.get(sitekey, body);
};

export default { metadata, tool, handler };
