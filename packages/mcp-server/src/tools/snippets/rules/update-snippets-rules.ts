// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'snippets.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_snippets_rules',
  description: 'Put Rules',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      rules: {
        type: 'array',
        description: 'List of snippet rules',
        items: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
            },
            enabled: {
              type: 'boolean',
            },
            expression: {
              type: 'string',
            },
            snippet_name: {
              type: 'string',
              description: 'Snippet identifying name',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.snippets.rules.update(body);
};

export default { metadata, tool, handler };
