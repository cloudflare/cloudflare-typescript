// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules',
  operationId: 'waiting-room-list-waiting-room-rules',
};

export const tool: Tool = {
  name: 'get_waiting_rooms_rules',
  description: 'Lists rules for a waiting room.',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { waiting_room_id, ...body } = args as any;
  return asTextContentResult(await client.waitingRooms.rules.get(waiting_room_id, body));
};

export default { metadata, tool, handler };
