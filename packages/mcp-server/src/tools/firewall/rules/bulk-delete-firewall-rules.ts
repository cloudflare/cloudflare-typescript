// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_delete_firewall_rules',
  description: 'Deletes existing firewall rules.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.firewall.rules.bulkDelete(body);
};

export default { metadata, tool, handler };
