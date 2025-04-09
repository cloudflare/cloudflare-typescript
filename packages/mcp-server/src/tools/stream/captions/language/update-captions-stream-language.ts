// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.captions.language',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_captions_stream_language',
  description:
    'Uploads the caption or subtitle file to the endpoint for a specific BCP47 language. One caption or subtitle file per language is allowed.',
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
      file: {
        type: 'string',
        description: 'The WebVTT file containing the caption or subtitle content.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { language, ...body } = args;
  return client.stream.captions.language.update(language, body);
};

export default { metadata, tool, handler };
