// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.direct_upload',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_stream_direct_upload',
  description: 'Creates a direct upload that allows video uploads without an API key.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      maxDurationSeconds: {
        type: 'integer',
        description:
          'The maximum duration in seconds for a video upload. Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.',
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
      expiry: {
        type: 'string',
        description: 'The date and time after upload when videos will not be accepted.',
        format: 'date-time',
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
  return client.stream.directUpload.create(body);
};

export default { metadata, tool, handler };
