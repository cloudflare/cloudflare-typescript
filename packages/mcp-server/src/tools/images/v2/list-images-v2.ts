// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/images/v2',
  operationId: 'cloudflare-images-list-images-v2',
};

export const tool: Tool = {
  name: 'list_images_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList up to 10000 images with one request. Use the optional parameters below to get a specific range of images.\nEndpoint returns continuation_token if more images are present.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/v2_list_response',\n  $defs: {\n    v2_list_response: {\n      type: 'object',\n      properties: {\n        continuation_token: {\n          type: 'string',\n          description: 'Continuation token to fetch next page. Passed as a query param when requesting List V2 api endpoint.'\n        },\n        images: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/image'\n          }\n        }\n      }\n    },\n    image: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Image unique identifier.'\n        },\n        creator: {\n          type: 'string',\n          description: 'Can set the creator field with an internal user ID.'\n        },\n        filename: {\n          type: 'string',\n          description: 'Image file name.'\n        },\n        meta: {\n          type: 'object',\n          description: 'User modifiable key-value store. Can be used for keeping references to another system of record for managing images. Metadata must not exceed 1024 bytes.',\n          additionalProperties: true\n        },\n        requireSignedURLs: {\n          type: 'boolean',\n          description: 'Indicates whether the image can be a accessed only using it\\'s UID. If set to true, a signed token needs to be generated with a signing key to view the image.'\n        },\n        uploaded: {\n          type: 'string',\n          description: 'When the media item was uploaded.',\n          format: 'date-time'\n        },\n        variants: {\n          type: 'array',\n          description: 'Object specifying available variants for an image.',\n          items: {\n            type: 'string',\n            description: 'URI to thumbnail variant for an image.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      continuation_token: {
        type: 'string',
        description: 'Continuation token for a next page. List images V2 returns continuation_token',
      },
      creator: {
        type: 'string',
        description:
          'Internal user ID set within the creator field. Setting to empty string "" will return images where creator field is not set',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page.',
      },
      sort_order: {
        type: 'string',
        description: 'Sorting order by upload time.',
        enum: ['asc', 'desc'],
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
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.images.v2.list(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
