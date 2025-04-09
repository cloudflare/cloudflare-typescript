// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.events.details',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_events_waiting_rooms_details',
  description:
    "Previews an event's configuration as if it was active. Inherited fields from the waiting room will be displayed with their current values.",
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
  return client.waitingRooms.events.details.get(event_id, body);
};

export default { metadata, tool, handler };
