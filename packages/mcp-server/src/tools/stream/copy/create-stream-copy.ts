// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.copy',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_stream_copy',
  description: 'Uploads a video to Stream from a provided URL.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      url: {
        type: 'string',
        description:
          "A video's URL. The server must be publicly routable and support `HTTP HEAD` requests and `HTTP GET` range requests. The server should respond to `HTTP HEAD` requests with a `content-range` header that includes the size of the file.",
      },
      allowedOrigins: {
        type: 'array',
        description:
          'Lists the origins allowed to display the video. Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.',
        items: {
          type: 'string',
        },
      },
      creator: {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
      },
      meta: {
        type: 'object',
        description:
          'A user modifiable key-value store used to reference other systems of record for managing videos.',
      },
      requireSignedURLs: {
        type: 'boolean',
        description:
          'Indicates whether the video can be a accessed using the UID. When set to `true`, a signed token must be generated with a signing key to view the video.',
      },
      scheduledDeletion: {
        type: 'string',
        description:
          'Indicates the date and time at which the video will be deleted. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.',
        format: 'date-time',
      },
      thumbnailTimestampPct: {
        type: 'number',
        description:
          "The timestamp for a thumbnail image calculated as a percentage value of the video's duration. To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.",
      },
      watermark: {
        type: 'object',
        properties: {
          uid: {
            type: 'string',
            description: 'The unique identifier for the watermark profile.',
          },
        },
        required: [],
      },
      'Upload-Creator': {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.copy.create(body);
};

export default { metadata, tool, handler };
