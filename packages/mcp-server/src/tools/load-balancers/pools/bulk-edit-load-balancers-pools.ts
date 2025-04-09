// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.pools',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_edit_load_balancers_pools',
  description:
    'Apply changes to a number of existing pools, overwriting the supplied properties. Pools are ordered by ascending `name`. Returns the list of affected pools. Supports the standard pagination query parameters, either `limit`/`offset` or `per_page`/`page`.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      notification_email: {
        type: 'string',
        description:
          'The email address to send health status notifications to. This field is now deprecated in favor of Cloudflare Notifications for Load Balancing, so only resetting this field with an empty string `""` is accepted.',
        enum: [''],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.loadBalancers.pools.bulkEdit(body);
};

export default { metadata, tool, handler };
