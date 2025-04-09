// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.settings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_scripts_workers_settings',
  description:
    'Get script-level settings when using [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions). Includes Logpush and Tail Consumers.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_name, ...body } = args;
  return client.workers.scripts.settings.get(script_name, body);
};

export default { metadata, tool, handler };
