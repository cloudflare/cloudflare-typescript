// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.groups',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/access/groups/{group_id}',
};

export const tool: Tool = {
  name: 'delete_access_zero_trust_groups',
  description: 'Deletes an Access group.',
  inputSchema: {
    type: 'object',
    properties: {
      group_id: {
        type: 'string',
        description: 'UUID.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { group_id, ...body } = args as any;
  return client.zeroTrust.access.groups.delete(group_id, body);
};

export default { metadata, tool, handler };
