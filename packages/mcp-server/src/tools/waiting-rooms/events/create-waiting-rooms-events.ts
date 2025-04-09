// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.events',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_waiting_rooms_events',
  description:
    "Only available for the Waiting Room Advanced subscription. Creates an event for a waiting room. An event takes place during a specified period of time, temporarily changing the behavior of a waiting room. While the event is active, some of the properties in the event's configuration may either override or inherit from the waiting room's configuration. Note that events cannot overlap with each other, so only one event can be active at a time.",
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { waiting_room_id, ...body } = args;
  return client.waitingRooms.events.create(waiting_room_id, body);
};

export default { metadata, tool, handler };
