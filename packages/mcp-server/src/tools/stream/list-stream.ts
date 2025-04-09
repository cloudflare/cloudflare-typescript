// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream',
  operation: 'read',
  tags: [],
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
          'Searches over the `name` key in the `meta` field. This field can be set with or after the upload request.',
      },
      start: {
        type: 'string',
        description: 'Lists videos created after the specified date.',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Specifies the processing status for all quality levels for a video.',
        enum: ['pendingupload', 'downloading', 'queued', 'inprogress', 'ready', 'error'],
      },
      type: {
        type: 'string',
        description: 'Specifies whether the video is `vod` or `live`.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.list(body);
};

export default { metadata, tool, handler };
