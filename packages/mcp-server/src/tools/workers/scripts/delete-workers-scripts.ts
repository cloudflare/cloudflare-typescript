// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_workers_scripts',
  description: 'Delete your worker. This call has no response body on a successful delete.',
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
      force: {
        type: 'boolean',
        description:
          'If set to true, delete will not be stopped by associated service binding, durable object, or other binding. Any of these associated bindings/durable objects will be deleted along with the script.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_name, ...body } = args;
  return client.workers.scripts.delete(script_name, body);
};

export default { metadata, tool, handler };
