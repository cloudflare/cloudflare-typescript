// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.statuses',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_waiting_rooms_statuses',
  description:
    "Fetches the status of a configured waiting room. Response fields include:\n1. `status`: String indicating the status of the waiting room. The possible status are:\n\t- **not_queueing** indicates that the configured thresholds have not been met and all users are going through to the origin.\n\t- **queueing** indicates that the thresholds have been met and some users are held in the waiting room.\n\t- **event_prequeueing** indicates that an event is active and is currently prequeueing users before it starts.\n\t- **suspended** indicates that the room is suspended.\n2. `event_id`: String of the current event's `id` if an event is active, otherwise an empty string.\n3. `estimated_queued_users`: Integer of the estimated number of users currently waiting in the queue.\n4. `estimated_total_active_users`: Integer of the estimated number of users currently active on the origin.\n5. `max_estimated_time_minutes`: Integer of the maximum estimated time currently presented to the users.",
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { waiting_room_id, ...body } = args;
  return client.waitingRooms.statuses.get(waiting_room_id, body);
};

export default { metadata, tool, handler };
