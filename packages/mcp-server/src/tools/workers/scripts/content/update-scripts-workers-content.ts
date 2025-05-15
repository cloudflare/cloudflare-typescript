// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.content',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_scripts_workers_content',
  description: 'Put script content without touching config or metadata.',
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
      metadata: {
        $ref: '#/$defs/worker_metadata',
      },
      'CF-WORKER-BODY-PART': {
        type: 'string',
      },
      'CF-WORKER-MAIN-MODULE-PART': {
        type: 'string',
      },
    },
    $defs: {
      worker_metadata: {
        type: 'object',
        description: 'JSON encoded metadata about the uploaded parts and Worker configuration.',
        properties: {
          body_part: {
            type: 'string',
            description:
              'Name of the part in the multipart request that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.',
          },
          main_module: {
            type: 'string',
            description:
              'Name of the part in the multipart request that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return client.workers.scripts.content.update(script_name, body);
};

export default { metadata, tool, handler };
