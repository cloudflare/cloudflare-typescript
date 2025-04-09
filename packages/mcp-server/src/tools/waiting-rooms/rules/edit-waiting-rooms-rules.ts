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
  name: 'edit_waiting_rooms_rules',
  description: 'Patches a rule for a waiting room.',
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
      rule_id: {
        type: 'string',
        description: 'The ID of the rule.',
      },
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
      position: {
        anyOf: [
          {
            type: 'object',
            properties: {
              index: {
                type: 'integer',
                description:
                  'Places the rule in the exact position specified by the integer number <POSITION_NUMBER>. Position numbers start with 1. Existing rules in the ruleset from the specified position number onward are shifted one position (no rule is overwritten).',
              },
            },
            required: [],
          },
          {
            type: 'object',
            properties: {
              before: {
                type: 'string',
                description:
                  'Places the rule before rule <RULE_ID>. Use this argument with an empty rule ID value ("") to set the rule as the first rule in the ruleset.',
              },
            },
            required: [],
          },
          {
            type: 'object',
            properties: {
              after: {
                type: 'string',
                description:
                  'Places the rule after rule <RULE_ID>. Use this argument with an empty rule ID value ("") to set the rule as the last rule in the ruleset.',
              },
            },
            required: [],
          },
        ],
        description: 'Reorder the position of a rule',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.waitingRooms.rules.edit(rule_id, body);
};

export default { metadata, tool, handler };
