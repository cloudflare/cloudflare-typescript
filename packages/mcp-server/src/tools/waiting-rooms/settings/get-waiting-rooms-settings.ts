// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.settings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_waiting_rooms_settings',
  description: 'Get zone-level Waiting Room settings',
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
  return client.waitingRooms.settings.get(body);
};

export default { metadata, tool, handler };
