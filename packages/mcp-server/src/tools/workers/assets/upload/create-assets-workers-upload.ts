// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.assets.upload',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_assets_workers_upload',
  description:
    'Upload assets ahead of creating a Worker version.  To learn more about the direct uploads of assets, see https://developers.cloudflare.com/workers/static-assets/direct-upload/',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      base64: {
        type: 'string',
        description: 'Whether the file contents are base64-encoded. Must be `true`.',
        enum: [true],
      },
      '<any file hash>': {
        type: 'array',
        description:
          'Base-64 encoded contents of the file. The content type of the file should be included to ensure a valid "Content-Type" header is included in asset responses.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.workers.assets.upload.create(body);
};

export default { metadata, tool, handler };
