// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules/{rule_id}',
  operationId: 'waiting-room-delete-waiting-room-rule',
};

export const tool: Tool = {
  name: 'delete_waiting_rooms_rules',
  description: 'Deletes a rule for a waiting room.',
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
      rule_id: {
        type: 'string',
        description: 'The ID of the rule.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.waitingRooms.rules.delete(rule_id, body));
};

export default { metadata, tool, handler };
