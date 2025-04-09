// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.secrets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_scripts_workers_secrets',
  description: 'Add a secret to a script.',
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
      name: {
        type: 'string',
        description: 'The name of this secret, this is what will be used to access it inside the Worker.',
      },
      text: {
        type: 'string',
        description: 'The value of the secret.',
      },
      type: {
        type: 'string',
        description: 'The type of secret to put.',
        enum: ['secret_text'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_name, ...body } = args;
  return client.workers.scripts.secrets.update(script_name, body);
};

export default { metadata, tool, handler };
