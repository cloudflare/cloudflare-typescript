// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.deployments',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_scripts_workers_deployments',
  description:
    'List of Worker Deployments. The first deployment in the list is the latest deployment actively serving traffic.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_name, ...body } = args;
  return client.workers.scripts.deployments.get(script_name, body);
};

export default { metadata, tool, handler };
