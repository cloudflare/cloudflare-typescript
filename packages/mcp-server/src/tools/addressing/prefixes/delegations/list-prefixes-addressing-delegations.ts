// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.delegations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations',
  operationId: 'ip-address-management-prefix-delegation-list-prefix-delegations',
};

export const tool: Tool = {
  name: 'list_prefixes_addressing_delegations',
  description: 'List all delegations for a given account IP prefix.',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { prefix_id, ...body } = args as any;
  return asTextContentResult(await client.addressing.prefixes.delegations.list(prefix_id, body));
};

export default { metadata, tool, handler };
