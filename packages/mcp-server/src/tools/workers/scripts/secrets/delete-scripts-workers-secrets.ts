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
  name: 'delete_scripts_workers_secrets',
  description: 'Remove a secret from a script.',
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
      secret_name: {
        type: 'string',
        description: 'A JavaScript variable name for the secret binding.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { secret_name, ...body } = args;
  return client.workers.scripts.secrets.delete(secret_name, body);
};

export default { metadata, tool, handler };
