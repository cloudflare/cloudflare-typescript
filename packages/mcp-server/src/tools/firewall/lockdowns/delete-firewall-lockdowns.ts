// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.lockdowns',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_firewall_lockdowns',
  description: 'Deletes an existing Zone Lockdown rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      lock_downs_id: {
        type: 'string',
        description: 'The unique identifier of the Zone Lockdown rule.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { lock_downs_id, ...body } = args;
  return client.firewall.lockdowns.delete(lock_downs_id, body);
};

export default { metadata, tool, handler };
