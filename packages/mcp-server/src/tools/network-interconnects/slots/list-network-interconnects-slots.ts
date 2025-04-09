// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.slots',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_network_interconnects_slots',
  description: 'Retrieve a list of all slots matching the specified parameters',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      address_contains: {
        type: 'string',
        description: 'If specified, only show slots with the given text in their address field',
      },
      cursor: {
        type: 'integer',
      },
      limit: {
        type: 'integer',
      },
      occupied: {
        type: 'boolean',
        description: 'If specified, only show slots with a specific occupied/unoccupied state',
      },
      site: {
        type: 'string',
        description: 'If specified, only show slots located at the given site',
      },
      speed: {
        type: 'string',
        description: 'If specified, only show slots that support the given speed',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.networkInterconnects.slots.list(body);
};

export default { metadata, tool, handler };
