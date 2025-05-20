// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.apps',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_magic_transit_apps',
  description: 'Creates a new App for an account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      name: {
        type: 'string',
        description: 'Display name for the app.',
      },
      type: {
        type: 'string',
        description: 'Category of the app.',
      },
      hostnames: {
        type: 'array',
        description: 'FQDNs to associate with traffic decisions.',
        items: {
          type: 'string',
        },
      },
      ip_subnets: {
        type: 'array',
        description: 'IPv4 CIDRs to associate with traffic decisions. (IPv6 CIDRs are currently unsupported)',
        items: {
          type: 'string',
          description: 'A valid CIDR notation representing an IP range.',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.magicTransit.apps.create(body);
};

export default { metadata, tool, handler };
