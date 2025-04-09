// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_kv_namespaces',
  description: "Modifies a namespace's title.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      namespace_id: {
        type: 'string',
        description: 'Namespace identifier tag.',
      },
      title: {
        type: 'string',
        description: 'A human-readable string name for a Namespace.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { namespace_id, ...body } = args;
  return client.kv.namespaces.update(namespace_id, body);
};

export default { metadata, tool, handler };
