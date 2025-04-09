// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.versions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_scripts_workers_versions',
  description: 'Get Version Detail',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script.',
      },
      version_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { version_id, ...body } = args;
  return client.workers.scripts.versions.get(version_id, body);
};

export default { metadata, tool, handler };
