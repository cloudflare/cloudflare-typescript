// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.statuses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/waiting_rooms/{waiting_room_id}/status',
  operationId: 'waiting-room-get-waiting-room-status',
};

export const tool: Tool = {
  name: 'get_waiting_rooms_statuses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the status of a configured waiting room. Response fields include:\n1. `status`: String indicating the status of the waiting room. The possible status are:\n\t- **not_queueing** indicates that the configured thresholds have not been met and all users are going through to the origin.\n\t- **queueing** indicates that the thresholds have been met and some users are held in the waiting room.\n\t- **event_prequeueing** indicates that an event is active and is currently prequeueing users before it starts.\n\t- **suspended** indicates that the room is suspended.\n2. `event_id`: String of the current event's `id` if an event is active, otherwise an empty string.\n3. `estimated_queued_users`: Integer of the estimated number of users currently waiting in the queue.\n4. `estimated_total_active_users`: Integer of the estimated number of users currently active on the origin.\n5. `max_estimated_time_minutes`: Integer of the maximum estimated time currently presented to the users.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        estimated_queued_users: {\n          type: 'integer'\n        },\n        estimated_total_active_users: {\n          type: 'integer'\n        },\n        event_id: {\n          type: 'string'\n        },\n        max_estimated_time_minutes: {\n          type: 'integer'\n        },\n        status: {\n          type: 'string',\n          enum: [            'event_prequeueing',\n            'not_queueing',\n            'queueing',\n            'suspended'\n          ]\n        }\n      }\n    }\n  },\n  required: [    'result'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'waiting_room_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { waiting_room_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.waitingRooms.statuses.get(waiting_room_id, body)),
  );
};

export default { metadata, tool, handler };
