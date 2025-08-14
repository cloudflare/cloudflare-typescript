// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/images/v1/{image_id}',
  operationId: 'cloudflare-images-update-image',
};

export const tool: Tool = {
  name: 'edit_images_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate image access control. On access control change, all copies of the image are purged from cache.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/image'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    image: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Image unique identifier.'\n        },\n        creator: {\n          type: 'string',\n          description: 'Can set the creator field with an internal user ID.'\n        },\n        filename: {\n          type: 'string',\n          description: 'Image file name.'\n        },\n        meta: {\n          type: 'object',\n          description: 'User modifiable key-value store. Can be used for keeping references to another system of record for managing images. Metadata must not exceed 1024 bytes.',\n          additionalProperties: true\n        },\n        requireSignedURLs: {\n          type: 'boolean',\n          description: 'Indicates whether the image can be a accessed only using it\\'s UID. If set to true, a signed token needs to be generated with a signing key to view the image.'\n        },\n        uploaded: {\n          type: 'string',\n          description: 'When the media item was uploaded.',\n          format: 'date-time'\n        },\n        variants: {\n          type: 'array',\n          description: 'Object specifying available variants for an image.',\n          items: {\n            type: 'string',\n            description: 'URI to thumbnail variant for an image.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      image_id: {
        type: 'string',
        description: 'Image unique identifier.',
      },
      creator: {
        type: 'string',
        description: 'Can set the creator field with an internal user ID.',
      },
      metadata: {
        type: 'object',
        description:
          'User modifiable key-value store. Can be used for keeping references to another system of record for managing images. No change if not specified.',
        additionalProperties: true,
      },
      requireSignedURLs: {
        type: 'boolean',
        description:
          'Indicates whether the image can be accessed using only its UID. If set to `true`, a signed token needs to be generated with a signing key to view the image. Returns a new UID on a change. No change if not specified.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'image_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { image_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.images.v1.edit(image_id, body)));
};

export default { metadata, tool, handler };
