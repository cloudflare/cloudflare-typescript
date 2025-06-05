// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'snippets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/snippets/{snippet_name}',
  operationId: 'zone-snippets-snippet',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { snippet_name, ...body } = args as any;
  return asTextContentResult(await client.snippets.get(snippet_name, body));
};

export default { metadata, tool, handler };
