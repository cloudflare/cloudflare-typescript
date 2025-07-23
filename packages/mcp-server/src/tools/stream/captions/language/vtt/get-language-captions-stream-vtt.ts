// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.captions.language.vtt',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/stream/{identifier}/captions/{language}/vtt',
  operationId: 'stream-subtitles/-captions-get-vtt-caption-or-subtitle',
};

export const tool: Tool = {
  name: 'get_language_captions_stream_vtt',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturn WebVTT captions for a provided language.\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'identifier', 'language'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { language, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.stream.captions.language.vtt.get(language, body)),
  );
};

export default { metadata, tool, handler };
