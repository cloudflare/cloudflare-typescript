// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1.variants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/images/v1/variants',
  operationId: 'cloudflare-images-variants-list-variants',
};

export const tool: Tool = {
  name: 'list_v1_images_variants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists existing variants.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/variant'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    variant: {\n      type: 'object',\n      properties: {\n        variants: {\n          type: 'object',\n          properties: {\n            hero: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string'\n                },\n                options: {\n                  type: 'object',\n                  description: 'Allows you to define image resizing sizes for different use cases.',\n                  properties: {\n                    fit: {\n                      type: 'string',\n                      description: 'The fit property describes how the width and height dimensions should be interpreted.',\n                      enum: [                        'scale-down',\n                        'contain',\n                        'cover',\n                        'crop',\n                        'pad'\n                      ]\n                    },\n                    height: {\n                      type: 'number',\n                      description: 'Maximum height in image pixels.'\n                    },\n                    metadata: {\n                      type: 'string',\n                      description: 'What EXIF data should be preserved in the output image.',\n                      enum: [                        'keep',\n                        'copyright',\n                        'none'\n                      ]\n                    },\n                    width: {\n                      type: 'number',\n                      description: 'Maximum width in image pixels.'\n                    }\n                  },\n                  required: [                    'fit',\n                    'height',\n                    'metadata',\n                    'width'\n                  ]\n                },\n                neverRequireSignedURLs: {\n                  type: 'boolean',\n                  description: 'Indicates whether the variant can access an image without a signature, regardless of image access control.'\n                }\n              },\n              required: [                'id',\n                'options'\n              ]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.images.v1.variants.list(body)));
};

export default { metadata, tool, handler };
