// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_waiting_rooms_rules',
  description:
    'Only available for the Waiting Room Advanced subscription. Replaces all rules for a waiting room.',
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
      rules: {
        type: 'array',
        items: {
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { waiting_room_id, ...body } = args;
  return client.waitingRooms.rules.update(waiting_room_id, body);
};

export default { metadata, tool, handler };
