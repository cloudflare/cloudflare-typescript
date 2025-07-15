// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.clip',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/stream/clip',
  operationId: 'stream-video-clipping-clip-videos-given-a-start-and-end-time',
};

export const tool: Tool = {
  name: 'create_stream_clip',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nClips a video based on the specified start and end times provided in seconds.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/clip'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    clip: {\n      type: 'object',\n      properties: {\n        allowedOrigins: {\n          type: 'array',\n          description: 'Lists the origins allowed to display the video. Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.',\n          items: {\n            $ref: '#/$defs/allowed_origins'\n          }\n        },\n        clippedFromVideoUID: {\n          type: 'string',\n          description: 'The unique video identifier (UID).'\n        },\n        created: {\n          type: 'string',\n          description: 'The date and time the clip was created.',\n          format: 'date-time'\n        },\n        creator: {\n          type: 'string',\n          description: 'A user-defined identifier for the media creator.'\n        },\n        endTimeSeconds: {\n          type: 'integer',\n          description: 'Specifies the end time for the video clip in seconds.'\n        },\n        maxDurationSeconds: {\n          type: 'integer',\n          description: 'The maximum duration in seconds for a video upload. Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.'\n        },\n        meta: {\n          type: 'object',\n          description: 'A user modifiable key-value store used to reference other systems of record for managing videos.'\n        },\n        modified: {\n          type: 'string',\n          description: 'The date and time the live input was last modified.',\n          format: 'date-time'\n        },\n        playback: {\n          type: 'object',\n          properties: {\n            dash: {\n              type: 'string',\n              description: 'DASH Media Presentation Description for the video.'\n            },\n            hls: {\n              type: 'string',\n              description: 'The HLS manifest for the video.'\n            }\n          },\n          required: []\n        },\n        preview: {\n          type: 'string',\n          description: 'The video\\'s preview page URI. This field is omitted until encoding is complete.'\n        },\n        requireSignedURLs: {\n          type: 'boolean',\n          description: 'Indicates whether the video can be a accessed using the UID. When set to `true`, a signed token must be generated with a signing key to view the video.'\n        },\n        startTimeSeconds: {\n          type: 'integer',\n          description: 'Specifies the start time for the video clip in seconds.'\n        },\n        status: {\n          type: 'string',\n          description: 'Specifies the processing status for all quality levels for a video.',\n          enum: [            'pendingupload',\n            'downloading',\n            'queued',\n            'inprogress',\n            'ready',\n            'error'\n          ]\n        },\n        thumbnailTimestampPct: {\n          type: 'number',\n          description: 'The timestamp for a thumbnail image calculated as a percentage value of the video\\'s duration. To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.'\n        },\n        watermark: {\n          type: 'object',\n          properties: {\n            uid: {\n              type: 'string',\n              description: 'The unique identifier for the watermark profile.'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    allowed_origins: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      clippedFromVideoUID: {
        type: 'string',
        description: 'The unique video identifier (UID).',
      },
      endTimeSeconds: {
        type: 'integer',
        description: 'Specifies the end time for the video clip in seconds.',
      },
      startTimeSeconds: {
        type: 'integer',
        description: 'Specifies the start time for the video clip in seconds.',
      },
      allowedOrigins: {
        type: 'array',
        description:
          'Lists the origins allowed to display the video. Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.',
        items: {
          $ref: '#/$defs/allowed_origins',
        },
      },
      creator: {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
      },
      maxDurationSeconds: {
        type: 'integer',
        description:
          'The maximum duration in seconds for a video upload. Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.',
      },
      requireSignedURLs: {
        type: 'boolean',
        description:
          'Indicates whether the video can be a accessed using the UID. When set to `true`, a signed token must be generated with a signing key to view the video.',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      allowed_origins: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.stream.clip.create(body)));
};

export default { metadata, tool, handler };
