// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.events',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_waiting_rooms_events',
  description: 'Deletes an event for a waiting room.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      waiting_room_id: {
        type: 'string',
      },
      event_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { event_id, ...body } = args;
  return client.waitingRooms.events.delete(event_id, body);
};

export default { metadata, tool, handler };
