// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.schedules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_scripts_workers_schedules',
  description: 'Updates Cron Triggers for a Worker.',
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
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            created_on: {
              type: 'string',
            },
            cron: {
              type: 'string',
            },
            modified_on: {
              type: 'string',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_name, ...body } = args;
  return client.workers.scripts.schedules.update(script_name, body);
};

export default { metadata, tool, handler };
