// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/stream',
  operationId: 'stream-videos-initiate-video-uploads-using-tus',
};

export const tool: Tool = {
  name: 'create_stream',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitiates a video upload using the TUS protocol. On success, the server responds with a status code 201 (created) and includes a `location` header to indicate where the content should be uploaded. Refer to https://tus.io for protocol details.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      body: {
        type: 'object',
      },
      'Tus-Resumable': {
        type: 'string',
        description:
          'Specifies the TUS protocol version. This value must be included in every upload request.\nNotes: The only supported version of TUS protocol is 1.0.0.',
        enum: ['1.0.0'],
      },
      'Upload-Length': {
        type: 'integer',
        description:
          'Indicates the size of the entire upload in bytes. The value must be a non-negative integer.',
      },
      direct_user: {
        type: 'boolean',
        description:
          'Provisions a URL to let your end users upload videos directly to Cloudflare Stream without exposing your API token to clients.',
      },
      'Upload-Creator': {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
      },
      'Upload-Metadata': {
        type: 'string',
        description:
          'Comma-separated key-value pairs following the TUS protocol specification. Values are Base-64 encoded.\nSupported keys: `name`, `requiresignedurls`, `allowedorigins`, `thumbnailtimestamppct`, `watermark`, `scheduleddeletion`, `maxdurationseconds`.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'body', 'Tus-Resumable', 'Upload-Length'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.stream.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
