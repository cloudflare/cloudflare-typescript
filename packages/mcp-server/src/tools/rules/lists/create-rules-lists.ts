// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_rules_lists',
  description: 'Creates a new list of the specified type.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      kind: {
        type: 'string',
        description:
          'The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects).',
        enum: ['ip', 'redirect', 'hostname', 'asn'],
      },
      name: {
        type: 'string',
        description: 'An informative name for the list. Use this name in filter and rule expressions.',
      },
      description: {
        type: 'string',
        description: 'An informative summary of the list.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.rules.lists.create(body);
};

export default { metadata, tool, handler };
