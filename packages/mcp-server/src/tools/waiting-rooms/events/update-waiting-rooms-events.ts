// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.events',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}',
  operationId: 'waiting-room-update-event',
};

export const tool: Tool = {
  name: 'update_waiting_rooms_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a configured event for a waiting room.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      $ref: '#/$defs/event'\n    }\n  },\n  required: [    'result'\n  ],\n  $defs: {\n    event: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        custom_page_html: {\n          type: 'string',\n          description: 'If set, the event will override the waiting room\\'s `custom_page_html` property while it is active. If null, the event will inherit it.'\n        },\n        description: {\n          type: 'string',\n          description: 'A note that you can use to add more details about the event.'\n        },\n        disable_session_renewal: {\n          type: 'boolean',\n          description: 'If set, the event will override the waiting room\\'s `disable_session_renewal` property while it is active. If null, the event will inherit it.'\n        },\n        event_end_time: {\n          type: 'string',\n          description: 'An ISO 8601 timestamp that marks the end of the event.'\n        },\n        event_start_time: {\n          type: 'string',\n          description: 'An ISO 8601 timestamp that marks the start of the event. At this time, queued users will be processed with the event\\'s configuration. The start time must be at least one minute before `event_end_time`.'\n        },\n        modified_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'A unique name to identify the event. Only alphanumeric characters, hyphens and underscores are allowed.'\n        },\n        new_users_per_minute: {\n          type: 'integer',\n          description: 'If set, the event will override the waiting room\\'s `new_users_per_minute` property while it is active. If null, the event will inherit it. This can only be set if the event\\'s `total_active_users` property is also set.'\n        },\n        prequeue_start_time: {\n          type: 'string',\n          description: 'An ISO 8601 timestamp that marks when to begin queueing all users before the event starts. The prequeue must start at least five minutes before `event_start_time`.'\n        },\n        queueing_method: {\n          type: 'string',\n          description: 'If set, the event will override the waiting room\\'s `queueing_method` property while it is active. If null, the event will inherit it.'\n        },\n        session_duration: {\n          type: 'integer',\n          description: 'If set, the event will override the waiting room\\'s `session_duration` property while it is active. If null, the event will inherit it.'\n        },\n        shuffle_at_event_start: {\n          type: 'boolean',\n          description: 'If enabled, users in the prequeue will be shuffled randomly at the `event_start_time`. Requires that `prequeue_start_time` is not null. This is useful for situations when many users will join the event prequeue at the same time and you want to shuffle them to ensure fairness. Naturally, it makes the most sense to enable this feature when the `queueing_method` during the event respects ordering such as **fifo**, or else the shuffling may be unnecessary.'\n        },\n        suspended: {\n          type: 'boolean',\n          description: 'Suspends or allows an event. If set to `true`, the event is ignored and traffic will be handled based on the waiting room configuration.'\n        },\n        total_active_users: {\n          type: 'integer',\n          description: 'If set, the event will override the waiting room\\'s `total_active_users` property while it is active. If null, the event will inherit it. This can only be set if the event\\'s `new_users_per_minute` property is also set.'\n        },\n        turnstile_action: {\n          type: 'string',\n          description: 'If set, the event will override the waiting room\\'s `turnstile_action` property while it is active. If null, the event will inherit it.',\n          enum: [            'log',\n            'infinite_queue'\n          ]\n        },\n        turnstile_mode: {\n          type: 'string',\n          description: 'If set, the event will override the waiting room\\'s `turnstile_mode` property while it is active. If null, the event will inherit it.',\n          enum: [            'off',\n            'invisible',\n            'visible_non_interactive',\n            'visible_managed'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
      event_end_time: {
        type: 'string',
        description: 'An ISO 8601 timestamp that marks the end of the event.',
      },
      event_start_time: {
        type: 'string',
        description:
          "An ISO 8601 timestamp that marks the start of the event. At this time, queued users will be processed with the event's configuration. The start time must be at least one minute before `event_end_time`.",
      },
      name: {
        type: 'string',
        description:
          'A unique name to identify the event. Only alphanumeric characters, hyphens and underscores are allowed.',
      },
      custom_page_html: {
        type: 'string',
        description:
          "If set, the event will override the waiting room's `custom_page_html` property while it is active. If null, the event will inherit it.",
      },
      description: {
        type: 'string',
        description: 'A note that you can use to add more details about the event.',
      },
      disable_session_renewal: {
        type: 'boolean',
        description:
          "If set, the event will override the waiting room's `disable_session_renewal` property while it is active. If null, the event will inherit it.",
      },
      new_users_per_minute: {
        type: 'integer',
        description:
          "If set, the event will override the waiting room's `new_users_per_minute` property while it is active. If null, the event will inherit it. This can only be set if the event's `total_active_users` property is also set.",
      },
      prequeue_start_time: {
        type: 'string',
        description:
          'An ISO 8601 timestamp that marks when to begin queueing all users before the event starts. The prequeue must start at least five minutes before `event_start_time`.',
      },
      queueing_method: {
        type: 'string',
        description:
          "If set, the event will override the waiting room's `queueing_method` property while it is active. If null, the event will inherit it.",
      },
      session_duration: {
        type: 'integer',
        description:
          "If set, the event will override the waiting room's `session_duration` property while it is active. If null, the event will inherit it.",
      },
      shuffle_at_event_start: {
        type: 'boolean',
        description:
          'If enabled, users in the prequeue will be shuffled randomly at the `event_start_time`. Requires that `prequeue_start_time` is not null. This is useful for situations when many users will join the event prequeue at the same time and you want to shuffle them to ensure fairness. Naturally, it makes the most sense to enable this feature when the `queueing_method` during the event respects ordering such as **fifo**, or else the shuffling may be unnecessary.',
      },
      suspended: {
        type: 'boolean',
        description:
          'Suspends or allows an event. If set to `true`, the event is ignored and traffic will be handled based on the waiting room configuration.',
      },
      total_active_users: {
        type: 'integer',
        description:
          "If set, the event will override the waiting room's `total_active_users` property while it is active. If null, the event will inherit it. This can only be set if the event's `new_users_per_minute` property is also set.",
      },
      turnstile_action: {
        type: 'string',
        description:
          "If set, the event will override the waiting room's `turnstile_action` property while it is active. If null, the event will inherit it.",
        enum: ['log', 'infinite_queue'],
      },
      turnstile_mode: {
        type: 'string',
        description:
          "If set, the event will override the waiting room's `turnstile_mode` property while it is active. If null, the event will inherit it.",
        enum: ['off', 'invisible', 'visible_non_interactive', 'visible_managed'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'waiting_room_id', 'event_id', 'event_end_time', 'event_start_time', 'name'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.waitingRooms.events.update(event_id, body)),
  );
};

export default { metadata, tool, handler };
