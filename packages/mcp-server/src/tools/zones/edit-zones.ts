// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_zones',
  description: 'Edits a zone. Only one zone property can be changed at a time.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      type: {
        type: 'string',
        description:
          'A full zone implies that DNS is hosted with Cloudflare. A partial\nzone is typically a partner-hosted zone or a CNAME setup. This\nparameter is only available to Enterprise customers or if it has\nbeen explicitly enabled on a zone.',
        enum: ['full', 'partial', 'secondary', 'internal'],
      },
      vanity_name_servers: {
        type: 'array',
        description:
          'An array of domains used for custom name servers. This is only\navailable for Business and Enterprise plans.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zones.edit(body);
};

export default { metadata, tool, handler };
