// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/stream/{identifier}',
  operationId: 'stream-videos-retrieve-video-details',
};

export const tool: Tool = {
  name: 'get_stream',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches details for a single video.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/video',\n  $defs: {\n    video: {\n      type: 'object',\n      properties: {\n        allowedOrigins: {\n          type: 'array',\n          description: 'Lists the origins allowed to display the video. Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.',\n          items: {\n            $ref: '#/$defs/allowed_origins'\n          }\n        },\n        created: {\n          type: 'string',\n          description: 'The date and time the media item was created.',\n          format: 'date-time'\n        },\n        creator: {\n          type: 'string',\n          description: 'A user-defined identifier for the media creator.'\n        },\n        duration: {\n          type: 'number',\n          description: 'The duration of the video in seconds. A value of `-1` means the duration is unknown. The duration becomes available after the upload and before the video is ready.'\n        },\n        input: {\n          type: 'object',\n          properties: {\n            height: {\n              type: 'integer',\n              description: 'The video height in pixels. A value of `-1` means the height is unknown. The value becomes available after the upload and before the video is ready.'\n            },\n            width: {\n              type: 'integer',\n              description: 'The video width in pixels. A value of `-1` means the width is unknown. The value becomes available after the upload and before the video is ready.'\n            }\n          }\n        },\n        liveInput: {\n          type: 'string',\n          description: 'The live input ID used to upload a video with Stream Live.'\n        },\n        maxDurationSeconds: {\n          type: 'integer',\n          description: 'The maximum duration in seconds for a video upload. Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.'\n        },\n        meta: {\n          type: 'object',\n          description: 'A user modifiable key-value store used to reference other systems of record for managing videos.',\n          additionalProperties: true\n        },\n        modified: {\n          type: 'string',\n          description: 'The date and time the media item was last modified.',\n          format: 'date-time'\n        },\n        playback: {\n          type: 'object',\n          properties: {\n            dash: {\n              type: 'string',\n              description: 'DASH Media Presentation Description for the video.'\n            },\n            hls: {\n              type: 'string',\n              description: 'The HLS manifest for the video.'\n            }\n          }\n        },\n        preview: {\n          type: 'string',\n          description: 'The video\\'s preview page URI. This field is omitted until encoding is complete.'\n        },\n        readyToStream: {\n          type: 'boolean',\n          description: 'Indicates whether the video is playable. The field is empty if the video is not ready for viewing or the live stream is still in progress.'\n        },\n        readyToStreamAt: {\n          type: 'string',\n          description: 'Indicates the time at which the video became playable. The field is empty if the video is not ready for viewing or the live stream is still in progress.',\n          format: 'date-time'\n        },\n        requireSignedURLs: {\n          type: 'boolean',\n          description: 'Indicates whether the video can be a accessed using the UID. When set to `true`, a signed token must be generated with a signing key to view the video.'\n        },\n        scheduledDeletion: {\n          type: 'string',\n          description: 'Indicates the date and time at which the video will be deleted. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.',\n          format: 'date-time'\n        },\n        size: {\n          type: 'number',\n          description: 'The size of the media item in bytes.'\n        },\n        status: {\n          type: 'object',\n          description: 'Specifies a detailed status for a video. If the `state` is `inprogress` or `error`, the `step` field returns `encoding` or `manifest`. If the `state` is `inprogress`, `pctComplete` returns a number between 0 and 100 to indicate the approximate percent of completion. If the `state` is `error`, `errorReasonCode` and `errorReasonText` provide additional details.',\n          properties: {\n            errorReasonCode: {\n              type: 'string',\n              description: 'Specifies why the video failed to encode. This field is empty if the video is not in an `error` state. Preferred for programmatic use.'\n            },\n            errorReasonText: {\n              type: 'string',\n              description: 'Specifies why the video failed to encode using a human readable error message in English. This field is empty if the video is not in an `error` state.'\n            },\n            pctComplete: {\n              type: 'string',\n              description: 'Indicates the size of the entire upload in bytes. The value must be a non-negative integer.'\n            },\n            state: {\n              type: 'string',\n              description: 'Specifies the processing status for all quality levels for a video.',\n              enum: [                'pendingupload',\n                'downloading',\n                'queued',\n                'inprogress',\n                'ready',\n                'error',\n                'live-inprogress'\n              ]\n            }\n          }\n        },\n        thumbnail: {\n          type: 'string',\n          description: 'The media item\\'s thumbnail URI. This field is omitted until encoding is complete.'\n        },\n        thumbnailTimestampPct: {\n          type: 'number',\n          description: 'The timestamp for a thumbnail image calculated as a percentage value of the video\\'s duration. To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.'\n        },\n        uid: {\n          type: 'string',\n          description: 'A Cloudflare-generated unique identifier for a media item.'\n        },\n        uploaded: {\n          type: 'string',\n          description: 'The date and time the media item was uploaded.',\n          format: 'date-time'\n        },\n        uploadExpiry: {\n          type: 'string',\n          description: 'The date and time when the video upload URL is no longer valid for direct user uploads.',\n          format: 'date-time'\n        },\n        watermark: {\n          $ref: '#/$defs/watermark'\n        }\n      }\n    },\n    allowed_origins: {\n      type: 'string'\n    },\n    watermark: {\n      type: 'object',\n      properties: {\n        created: {\n          type: 'string',\n          description: 'The date and a time a watermark profile was created.',\n          format: 'date-time'\n        },\n        downloadedFrom: {\n          type: 'string',\n          description: 'The source URL for a downloaded image. If the watermark profile was created via direct upload, this field is null.'\n        },\n        height: {\n          type: 'integer',\n          description: 'The height of the image in pixels.'\n        },\n        name: {\n          type: 'string',\n          description: 'A short description of the watermark profile.'\n        },\n        opacity: {\n          type: 'number',\n          description: 'The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.'\n        },\n        padding: {\n          type: 'number',\n          description: 'The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.'\n        },\n        position: {\n          type: 'string',\n          description: 'The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.'\n        },\n        scale: {\n          type: 'number',\n          description: 'The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.'\n        },\n        size: {\n          type: 'number',\n          description: 'The size of the image in bytes.'\n        },\n        uid: {\n          type: 'string',\n          description: 'The unique identifier for a watermark profile.'\n        },\n        width: {\n          type: 'integer',\n          description: 'The width of the image in pixels.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      identifier: {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'identifier'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.stream.get(identifier, body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
