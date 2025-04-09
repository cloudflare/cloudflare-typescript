// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces.scripts.tags',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_scripts_namespaces_dispatch_workers_for_platforms_tags',
  description: 'Delete script tag for a script uploaded to a Workers for Platforms namespace.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      dispatch_namespace: {
        type: 'string',
        description: 'Name of the Workers for Platforms dispatch namespace.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
      tag: {
        type: 'string',
        description: 'Tag to help you manage your Worker',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { tag, ...body } = args;
  return client.workersForPlatforms.dispatch.namespaces.scripts.tags.delete(tag, body);
};

export default { metadata, tool, handler };
