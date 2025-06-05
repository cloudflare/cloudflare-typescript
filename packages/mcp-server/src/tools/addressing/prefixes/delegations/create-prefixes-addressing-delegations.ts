// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.delegations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations',
  operationId: 'ip-address-management-prefix-delegation-create-prefix-delegation',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { prefix_id, ...body } = args as any;
  return asTextContentResult(await client.addressing.prefixes.delegations.create(prefix_id, body));
};

export default { metadata, tool, handler };
