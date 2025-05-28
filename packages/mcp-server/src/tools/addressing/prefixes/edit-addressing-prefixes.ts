// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/addressing/prefixes/{prefix_id}',
  operationId: 'ip-address-management-prefixes-update-prefix-description',
};

export const tool: Tool = {
  name: 'edit_addressing_prefixes',
  description: 'Modify the description for a prefix owned by the account.',
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
      description: {
        type: 'string',
        description: 'Description of the prefix.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { prefix_id, ...body } = args as any;
  return client.addressing.prefixes.edit(prefix_id, body);
};

export default { metadata, tool, handler };
