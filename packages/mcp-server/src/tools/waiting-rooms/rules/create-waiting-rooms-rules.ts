// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules',
  operationId: 'waiting-room-create-waiting-room-rule',
};

export const tool: Tool = {
  name: 'create_waiting_rooms_rules',
  description:
    'Only available for the Waiting Room Advanced subscription. Creates a rule for a waiting room.',
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
      rules: {
        type: 'object',
        properties: {
          action: {
            type: 'string',
            description: 'The action to take when the expression matches.',
            enum: ['bypass_waiting_room'],
          },
          expression: {
            type: 'string',
            description: 'Criteria defining when there is a match for the current rule.',
          },
          description: {
            type: 'string',
            description: 'The description of the rule.',
          },
          enabled: {
            type: 'boolean',
            description: 'When set to true, the rule is enabled.',
          },
        },
        required: ['action', 'expression'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { waiting_room_id, ...body } = args as any;
  return asTextContentResult(await client.waitingRooms.rules.create(waiting_room_id, body));
};

export default { metadata, tool, handler };
