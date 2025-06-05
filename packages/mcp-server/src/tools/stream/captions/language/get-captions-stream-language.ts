// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.captions.language',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/stream/{identifier}/captions/{language}',
  operationId: 'stream-subtitles/-captions-get-caption-or-subtitle-for-language',
};

export const tool: Tool = {
  name: 'get_captions_stream_language',
  description: 'Lists the captions or subtitles for provided language.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      identifier: {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
      },
      language: {
        type: 'string',
        description: 'The language tag in BCP 47 format.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { language, ...body } = args as any;
  return asTextContentResult(await client.stream.captions.language.get(language, body));
};

export default { metadata, tool, handler };
