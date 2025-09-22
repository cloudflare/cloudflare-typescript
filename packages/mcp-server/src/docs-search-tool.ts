// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from './tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const metadata: Metadata = {
  resource: 'all',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
};

export const tool: Tool = {
  name: 'search_docs',
  description:
    'Search for documentation for how to use the client to interact with the API.\nThe tool will return an array of Markdown-formatted documentation pages.',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'The query to search for.',
      },
      language: {
        type: 'string',
        description: 'The language for the SDK to search for.',
        enum: ['http', 'python', 'go', 'typescript', 'terraform', 'ruby', 'java', 'kotlin'],
      },
    },
    required: ['query', 'language'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (_: unknown, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const query = new URLSearchParams(body).toString();
  const result = await fetch('https://api.stainless.com/api/projects/cloudflare/docs/search?' + query);
  return asTextContentResult(await result.json());
};

export default { metadata, tool, handler };
