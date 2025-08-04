// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/stream',
  operationId: 'stream-videos-list-videos',
};

export const tool: Tool = {
  name: 'list_stream',
  description:
    'Lists up to 1000 videos from a single request. For a specific range, refer to the optional parameters.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      asc: {
        type: 'boolean',
        description: 'Lists videos in ascending order of creation.',
      },
      creator: {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
      },
      end: {
        type: 'string',
        description: 'Lists videos created before the specified date.',
        format: 'date-time',
      },
      include_counts: {
        type: 'boolean',
        description: 'Includes the total number of videos associated with the submitted query parameters.',
      },
      search: {
        type: 'string',
        description:
          'Provides a partial word match of the `name` key in the `meta` field. Slow for medium to large video libraries. May be unavailable for very large libraries.',
      },
      start: {
        type: 'string',
        description: 'Lists videos created after the specified date.',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Specifies the processing status for all quality levels for a video.',
        enum: ['pendingupload', 'downloading', 'queued', 'inprogress', 'ready', 'error', 'live-inprogress'],
      },
      type: {
        type: 'string',
        description: 'Specifies whether the video is `vod` or `live`.',
      },
      video_name: {
        type: 'string',
        description: 'Provides a fast, exact string match on the `name` key in the `meta` field.',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.stream.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
