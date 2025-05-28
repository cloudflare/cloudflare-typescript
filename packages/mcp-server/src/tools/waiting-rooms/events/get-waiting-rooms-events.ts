// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}',
  operationId: 'waiting-room-event-details',
};

export const tool: Tool = {
  name: 'get_waiting_rooms_events',
  description: 'Fetches a single configured event for a waiting room.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_id, ...body } = args as any;
  return client.waitingRooms.events.get(event_id, body);
};

export default { metadata, tool, handler };
