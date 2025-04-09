// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.tail',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_scripts_workers_tail',
  description: 'Deletes a tail from a Worker.',
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
      id: {
        type: 'string',
        description: 'Identifier for the tail.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { id, ...body } = args;
  return client.workers.scripts.tail.delete(id, body);
};

export default { metadata, tool, handler };
