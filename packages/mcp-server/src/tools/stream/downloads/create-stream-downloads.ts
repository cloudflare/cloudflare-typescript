// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.downloads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/stream/{identifier}/downloads',
  operationId: 'stream-m-p-4-downloads-create-downloads',
};

export const tool: Tool = {
  name: 'create_stream_downloads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a download for a video when a video is ready to view. Use `/downloads/{download_type}` instead for type-specific downloads. Available types are `default` and `audio`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/download_create_response',\n  $defs: {\n    download_create_response: {\n      type: 'object',\n      properties: {\n        percentComplete: {\n          type: 'number',\n          description: 'Indicates the progress as a percentage between 0 and 100.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of a generated download.',\n          enum: [            'ready',\n            'inprogress',\n            'error'\n          ]\n        },\n        url: {\n          type: 'string',\n          description: 'The URL to access the generated download.'\n        }\n      }\n    }\n  }\n}\n```",
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
      body: {
        type: 'object',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'identifier', 'body'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.stream.downloads.create(identifier, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
