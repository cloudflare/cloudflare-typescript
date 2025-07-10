// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.events.details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}/details',
  operationId: 'waiting-room-preview-active-event-details',
};

export const tool: Tool = {
  name: 'get_events_waiting_rooms_details',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPreviews an event's configuration as if it was active. Inherited fields from the waiting room will be displayed with their current values.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        custom_page_html: {\n          type: 'string'\n        },\n        description: {\n          type: 'string',\n          description: 'A note that you can use to add more details about the event.'\n        },\n        disable_session_renewal: {\n          type: 'boolean'\n        },\n        event_end_time: {\n          type: 'string',\n          description: 'An ISO 8601 timestamp that marks the end of the event.'\n        },\n        event_start_time: {\n          type: 'string',\n          description: 'An ISO 8601 timestamp that marks the start of the event. At this time, queued users will be processed with the event\\'s configuration. The start time must be at least one minute before `event_end_time`.'\n        },\n        modified_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'A unique name to identify the event. Only alphanumeric characters, hyphens and underscores are allowed.'\n        },\n        new_users_per_minute: {\n          type: 'integer'\n        },\n        prequeue_start_time: {\n          type: 'string',\n          description: 'An ISO 8601 timestamp that marks when to begin queueing all users before the event starts. The prequeue must start at least five minutes before `event_start_time`.'\n        },\n        queueing_method: {\n          type: 'string'\n        },\n        session_duration: {\n          type: 'integer'\n        },\n        shuffle_at_event_start: {\n          type: 'boolean',\n          description: 'If enabled, users in the prequeue will be shuffled randomly at the `event_start_time`. Requires that `prequeue_start_time` is not null. This is useful for situations when many users will join the event prequeue at the same time and you want to shuffle them to ensure fairness. Naturally, it makes the most sense to enable this feature when the `queueing_method` during the event respects ordering such as **fifo**, or else the shuffling may be unnecessary.'\n        },\n        suspended: {\n          type: 'boolean',\n          description: 'Suspends or allows an event. If set to `true`, the event is ignored and traffic will be handled based on the waiting room configuration.'\n        },\n        total_active_users: {\n          type: 'integer'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'result'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.waitingRooms.events.details.get(event_id, body)),
  );
};

export default { metadata, tool, handler };
