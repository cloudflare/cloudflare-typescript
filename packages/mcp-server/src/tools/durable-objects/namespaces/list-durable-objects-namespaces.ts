// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'durable_objects.namespaces',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_durable_objects_namespaces',
  description: 'Returns the Durable Object namespaces owned by an account.',
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
  return client.durableObjects.namespaces.list(body);
};

export default { metadata, tool, handler };
