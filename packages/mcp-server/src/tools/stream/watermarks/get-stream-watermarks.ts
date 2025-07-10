// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.watermarks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/stream/watermarks/{identifier}',
  operationId: 'stream-watermark-profile-watermark-profile-details',
};

export const tool: Tool = {
  name: 'get_stream_watermarks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves details for a single watermark profile.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/watermark'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    watermark: {\n      type: 'object',\n      properties: {\n        created: {\n          type: 'string',\n          description: 'The date and a time a watermark profile was created.',\n          format: 'date-time'\n        },\n        downloadedFrom: {\n          type: 'string',\n          description: 'The source URL for a downloaded image. If the watermark profile was created via direct upload, this field is null.'\n        },\n        height: {\n          type: 'integer',\n          description: 'The height of the image in pixels.'\n        },\n        name: {\n          type: 'string',\n          description: 'A short description of the watermark profile.'\n        },\n        opacity: {\n          type: 'number',\n          description: 'The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.'\n        },\n        padding: {\n          type: 'number',\n          description: 'The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.'\n        },\n        position: {\n          type: 'string',\n          description: 'The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.'\n        },\n        scale: {\n          type: 'number',\n          description: 'The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.'\n        },\n        size: {\n          type: 'number',\n          description: 'The size of the image in bytes.'\n        },\n        uid: {\n          type: 'string',\n          description: 'The unique identifier for a watermark profile.'\n        },\n        width: {\n          type: 'integer',\n          description: 'The width of the image in pixels.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      identifier: {
        type: 'string',
        description: 'The unique identifier for a watermark profile.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.stream.watermarks.get(identifier, body)));
};

export default { metadata, tool, handler };
