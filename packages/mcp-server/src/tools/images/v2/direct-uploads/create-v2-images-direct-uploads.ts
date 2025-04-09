// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v2.direct_uploads',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v2_images_direct_uploads',
  description:
    'Direct uploads allow users to upload images without API keys. A common use case are web apps, client-side applications, or mobile devices where users upload content directly to Cloudflare Images. This method creates a draft record for a future image. It returns an upload URL and an image identifier. To verify if the image itself has been uploaded, send an image details request (accounts/:account_identifier/images/v1/:identifier), and check that the `draft: true` property is not present.',
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
      },
      requireSignedURLs: {
        type: 'boolean',
        description: 'Indicates whether the image requires a signature token to be accessed.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.images.v2.directUploads.create(body);
};

export default { metadata, tool, handler };
