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
    'Upload assets ahead of creating a Worker version.  To learn more about the direct uploads of assets, see https://developers.cloudflare.com/workers/static-assets/direct-upload/.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.workers.assets.upload.create(body);
};

export default { metadata, tool, handler };
