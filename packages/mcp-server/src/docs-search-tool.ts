// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { Metadata, McpRequestContext, asTextContentResult } from './types';
import { getLogger } from './logger';
import type { LocalDocsSearch } from './local-docs-search';

export const metadata: Metadata = {
  resource: 'all',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
};

export const tool: Tool = {
  name: 'search_docs',
  description:
    'Search SDK documentation to find methods, parameters, and usage examples for interacting with the API. Use this before writing code when you need to discover the right approach.',
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
        enum: ['http', 'python', 'go', 'typescript', 'javascript', 'terraform', 'ruby', 'java', 'kotlin'],
      },
      detail: {
        type: 'string',
        description: 'The amount of detail to return.',
        enum: ['default', 'verbose'],
      },
    },
    required: ['query', 'language'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

const docsSearchURL =
  process.env['DOCS_SEARCH_URL'] || 'https://api.stainless.com/api/projects/cloudflare/docs/search';

let _localSearch: LocalDocsSearch | undefined;

export function setLocalSearch(search: LocalDocsSearch): void {
  _localSearch = search;
}

async function searchLocal(args: Record<string, unknown>): Promise<unknown> {
  if (!_localSearch) {
    throw new Error('Local search not initialized');
  }

  const query = (args['query'] as string) ?? '';
  const language = (args['language'] as string) ?? 'typescript';
  const detail = (args['detail'] as string) ?? 'default';

  return _localSearch.search({
    query,
    language,
    detail,
    maxResults: 10,
  }).results;
}

async function searchRemote(args: Record<string, unknown>, reqContext: McpRequestContext): Promise<unknown> {
  const body = args as any;
  const query = new URLSearchParams(body).toString();

  const startTime = Date.now();
  const result = await fetch(`${docsSearchURL}?${query}`, {
    headers: {
      ...(reqContext.stainlessApiKey && { Authorization: reqContext.stainlessApiKey }),
      ...(reqContext.mcpSessionId && { 'x-stainless-mcp-session-id': reqContext.mcpSessionId }),
      ...(reqContext.mcpClientInfo && {
        'x-stainless-mcp-client-info': JSON.stringify(reqContext.mcpClientInfo),
      }),
    },
  });

  const logger = getLogger();

  if (!result.ok) {
    const errorText = await result.text();
    logger.warn(
      {
        durationMs: Date.now() - startTime,
        query: body.query,
        status: result.status,
        statusText: result.statusText,
        errorText,
      },
      'Got error response from docs search tool',
    );

    if (result.status === 404 && !reqContext.stainlessApiKey) {
      throw new Error(
        'Could not find docs for this project. You may need to provide a Stainless API key via the STAINLESS_API_KEY environment variable, the --stainless-api-key flag, or the x-stainless-api-key HTTP header.',
      );
    }

    throw new Error(
      `${result.status}: ${result.statusText} when using doc search tool. Details: ${errorText}`,
    );
  }

  const resultBody = await result.json();
  logger.info(
    {
      durationMs: Date.now() - startTime,
      query: body.query,
    },
    'Got docs search result',
  );
  return resultBody;
}

export const handler = async ({
  reqContext,
  args,
}: {
  reqContext: McpRequestContext;
  args: Record<string, unknown> | undefined;
}) => {
  const body = args ?? {};

  if (_localSearch) {
    return asTextContentResult(await searchLocal(body));
  }

  return asTextContentResult(await searchRemote(body, reqContext));
};

export default { metadata, tool, handler };
