// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.events',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_waiting_rooms_events',
  description: 'Lists events for a waiting room.',
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
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page. Must be a multiple of 5.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { waiting_room_id, ...body } = args;
  return client.waitingRooms.events.list(waiting_room_id, body);
};

export default { metadata, tool, handler };
