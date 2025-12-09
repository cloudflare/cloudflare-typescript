// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v2.direct_uploads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/images/v2/direct_upload',
  operationId: 'cloudflare-images-create-authenticated-direct-upload-url-v-2',
};

export const tool: Tool = {
  name: 'create_v2_images_direct_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDirect uploads allow users to upload images without API keys. A common use case are web apps, client-side applications, or mobile devices where users upload content directly to Cloudflare Images. This method creates a draft record for a future image. It returns an upload URL and an image identifier. To verify if the image itself has been uploaded, send an image details request (accounts/:account_identifier/images/v1/:identifier), and check that the `draft: true` property is not present.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/direct_upload_create_response',\n  $defs: {\n    direct_upload_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Image unique identifier.'\n        },\n        uploadURL: {\n          type: 'string',\n          description: 'The URL the unauthenticated upload can be performed to using a single HTTP POST (multipart/form-data) request.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      id: {
        type: 'string',
        description:
          'Optional Image Custom ID. Up to 1024 chars. Can include any number of subpaths, and utf8 characters. Cannot start nor end with a / (forward slash). Cannot be a UUID.',
      },
      creator: {
        type: 'string',
        description: 'Can set the creator field with an internal user ID.',
      },
      expiry: {
        type: 'string',
        description:
          'The date after which the upload will not be accepted. Minimum: Now + 2 minutes. Maximum: Now + 6 hours.',
        format: 'date-time',
      },
      metadata: {
        type: 'object',
        description:
          'User modifiable key-value store. Can be used for keeping references to another system of record, for managing images.',
        additionalProperties: true,
      },
      requireSignedURLs: {
        type: 'boolean',
        description: 'Indicates whether the image requires a signature token to be accessed.',
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.images.v2.directUploads.create(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
