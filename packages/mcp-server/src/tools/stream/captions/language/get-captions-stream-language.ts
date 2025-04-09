// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.captions.language',
  operation: 'read',
  tags: [],
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

export const handler = (client: Cloudflare, args: any) => {
  const { language, ...body } = args;
  return client.stream.captions.language.get(language, body);
};

export default { metadata, tool, handler };
