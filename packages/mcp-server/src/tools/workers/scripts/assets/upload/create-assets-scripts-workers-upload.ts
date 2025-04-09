// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.assets.upload',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_assets_scripts_workers_upload',
  description:
    'Start uploading a collection of assets for use in a Worker version. To learn more about the direct uploads of assets, see https://developers.cloudflare.com/workers/static-assets/direct-upload/',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
      manifest: {
        type: 'object',
        description:
          'A manifest ([path]: {hash, size}) map of files to upload. As an example, `/blog/hello-world.html` would be a valid path key.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_name, ...body } = args;
  return client.workers.scripts.assets.upload.create(script_name, body);
};

export default { metadata, tool, handler };
