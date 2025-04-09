// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_stream',
  description:
    'Initiates a video upload using the TUS protocol. On success, the server responds with a status code 201 (created) and includes a `location` header to indicate where the content should be uploaded. Refer to https://tus.io for protocol details.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.create(body);
};

export default { metadata, tool, handler };
