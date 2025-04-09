// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces.scripts.secrets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_scripts_namespaces_dispatch_workers_for_platforms_secrets',
  description:
    'Get a given secret binding (value omitted) on a script uploaded to a Workers for Platforms namespace.',
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
      secret_name: {
        type: 'string',
        description: 'A JavaScript variable name for the secret binding.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { secret_name, ...body } = args;
  return client.workersForPlatforms.dispatch.namespaces.scripts.secrets.get(secret_name, body);
};

export default { metadata, tool, handler };
