// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.videos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/stream/storage-usage',
  operationId: 'stream-videos-storage-usage',
};

export const tool: Tool = {
  name: 'storage_usage_stream_videos',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns information about an account's storage use.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/video_storage_usage_response',\n  $defs: {\n    video_storage_usage_response: {\n      type: 'object',\n      properties: {\n        creator: {\n          type: 'string',\n          description: 'A user-defined identifier for the media creator.'\n        },\n        totalStorageMinutes: {\n          type: 'integer',\n          description: 'The total minutes of video content stored in the account.'\n        },\n        totalStorageMinutesLimit: {\n          type: 'integer',\n          description: 'The storage capacity alloted for the account.'\n        },\n        videoCount: {\n          type: 'integer',\n          description: 'The total count of videos associated with the account.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      creator: {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.stream.videos.storageUsage(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
