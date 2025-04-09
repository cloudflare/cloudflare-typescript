// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.script_and_version_settings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_scripts_workers_script_and_version_settings',
  description: 'Get metadata and config, such as bindings or usage model',
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
  return client.workers.scripts.scriptAndVersionSettings.get(script_name, body);
};

export default { metadata, tool, handler };
