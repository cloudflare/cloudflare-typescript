// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_d1_database',
  description: 'Returns the created D1 database.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      name: {
        type: 'string',
        description: 'D1 database name.',
      },
      primary_location_hint: {
        type: 'string',
        description:
          'Specify the region to create the D1 primary, if available. If this option is omitted, the D1 will be created as close as possible to the current user.',
        enum: ['wnam', 'enam', 'weur', 'eeur', 'apac', 'oc'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.d1.database.create(body);
};

export default { metadata, tool, handler };
