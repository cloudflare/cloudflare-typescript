// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'snippets.content',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/snippets/{snippet_name}/content',
  operationId: 'getZoneSnippetContent',
};

export const tool: Tool = {
  name: 'get_snippets_content',
  description: 'Fetches the content of a snippet belonging to the zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'Zone ID',
        description: 'The unique ID of the zone.',
      },
      snippet_name: {
        type: 'string',
        title: 'Snippet Name',
        description: 'The identifying name of the snippet.',
      },
    },
    required: ['zone_id', 'snippet_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { snippet_name, ...body } = args as any;
  return asBinaryContentResult(await client.snippets.content.get(snippet_name, body));
};

export default { metadata, tool, handler };
