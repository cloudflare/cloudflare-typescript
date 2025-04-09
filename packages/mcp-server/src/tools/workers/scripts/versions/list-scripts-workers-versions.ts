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
  name: 'list_scripts_workers_versions',
  description: 'List of Worker Versions. The first version in the list is the latest version.',
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
      deployable: {
        type: 'boolean',
        description: 'Only return versions that can be used in a deployment. Ignores pagination.',
      },
      page: {
        type: 'integer',
        description: 'Current page.',
      },
      per_page: {
        type: 'integer',
        description: 'Items per-page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_name, ...body } = args;
  return client.workers.scripts.versions.list(script_name, body);
};

export default { metadata, tool, handler };
