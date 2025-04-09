// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.delegations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_prefixes_addressing_delegations',
  description: 'Create a new account delegation for a given IP prefix.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      prefix_id: {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
      },
      cidr: {
        type: 'string',
        description: 'IP Prefix in Classless Inter-Domain Routing format.',
      },
      delegated_account_id: {
        type: 'string',
        description: 'Account identifier for the account to which prefix is being delegated.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { prefix_id, ...body } = args;
  return client.addressing.prefixes.delegations.create(prefix_id, body);
};

export default { metadata, tool, handler };
