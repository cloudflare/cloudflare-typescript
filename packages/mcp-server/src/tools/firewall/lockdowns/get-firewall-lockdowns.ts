// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.lockdowns',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_firewall_lockdowns',
  description: 'Fetches the details of a Zone Lockdown rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      lock_downs_id: {
        type: 'string',
        description: 'The unique identifier of the Zone Lockdown rule.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { lock_downs_id, ...body } = args as any;
  return client.firewall.lockdowns.get(lock_downs_id, body);
};

export default { metadata, tool, handler };
