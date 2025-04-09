// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'snippets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_snippets',
  description: 'Put Snippet',
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
      files: {
        type: 'string',
        description: 'Content files of uploaded snippet',
      },
      metadata: {
        type: 'object',
        properties: {
          main_module: {
            type: 'string',
            description: 'Main module name of uploaded snippet',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { snippet_name, ...body } = args;
  return client.snippets.update(snippet_name, body);
};

export default { metadata, tool, handler };
