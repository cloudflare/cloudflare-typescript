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
  name: 'delete_prefixes_addressing_delegations',
  description: 'Delete an account delegation for a given IP prefix.',
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
      delegation_id: {
        type: 'string',
        description: 'Identifier of a Delegation.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { delegation_id, ...body } = args;
  return client.addressing.prefixes.delegations.delete(delegation_id, body);
};

export default { metadata, tool, handler };
