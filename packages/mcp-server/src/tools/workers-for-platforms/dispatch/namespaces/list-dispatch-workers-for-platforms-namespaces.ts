// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_dispatch_workers_for_platforms_namespaces',
  description: 'Fetch a list of Workers for Platforms namespaces.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.workersForPlatforms.dispatch.namespaces.list(body);
};

export default { metadata, tool, handler };
