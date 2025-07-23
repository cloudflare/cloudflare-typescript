// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.direct_upload',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/stream/direct_upload',
  operationId: 'stream-videos-upload-videos-via-direct-upload-ur-ls',
};

export const tool: Tool = {
  name: 'create_stream_direct_upload',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a direct upload that allows video uploads without an API key.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        scheduledDeletion: {\n          type: 'string',\n          description: 'Indicates the date and time at which the video will be deleted. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.',\n          format: 'date-time'\n        },\n        uid: {\n          type: 'string',\n          description: 'A Cloudflare-generated unique identifier for a media item.'\n        },\n        uploadURL: {\n          type: 'string',\n          description: 'The URL an unauthenticated upload can use for a single `HTTP POST multipart/form-data` request.'\n        },\n        watermark: {\n          $ref: '#/$defs/watermark'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    watermark: {\n      type: 'object',\n      properties: {\n        created: {\n          type: 'string',\n          description: 'The date and a time a watermark profile was created.',\n          format: 'date-time'\n        },\n        downloadedFrom: {\n          type: 'string',\n          description: 'The source URL for a downloaded image. If the watermark profile was created via direct upload, this field is null.'\n        },\n        height: {\n          type: 'integer',\n          description: 'The height of the image in pixels.'\n        },\n        name: {\n          type: 'string',\n          description: 'A short description of the watermark profile.'\n        },\n        opacity: {\n          type: 'number',\n          description: 'The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.'\n        },\n        padding: {\n          type: 'number',\n          description: 'The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.'\n        },\n        position: {\n          type: 'string',\n          description: 'The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.'\n        },\n        scale: {\n          type: 'number',\n          description: 'The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.'\n        },\n        size: {\n          type: 'number',\n          description: 'The size of the image in bytes.'\n        },\n        uid: {\n          type: 'string',\n          description: 'The unique identifier for a watermark profile.'\n        },\n        width: {\n          type: 'integer',\n          description: 'The width of the image in pixels.'\n        }\n      }\n    }\n  }\n}\n```",
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
          $ref: '#/$defs/allowed_origins',
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
      },
      'Upload-Creator': {
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
    required: ['account_id', 'maxDurationSeconds'],
    $defs: {
      allowed_origins: {
        type: 'string',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.stream.directUpload.create(body)));
};

export default { metadata, tool, handler };
