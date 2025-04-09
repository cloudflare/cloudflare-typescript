// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'snippets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_snippets',
  description: 'Snippet',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      snippet_name: {
        type: 'string',
        description: 'Snippet identifying name',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { snippet_name, ...body } = args;
  return client.snippets.get(snippet_name, body);
};

export default { metadata, tool, handler };
