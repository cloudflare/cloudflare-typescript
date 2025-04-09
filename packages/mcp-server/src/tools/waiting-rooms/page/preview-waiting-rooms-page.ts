// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.page',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'preview_waiting_rooms_page',
  description:
    'Creates a waiting room page preview. Upload a custom waiting room page for preview. You will receive a preview URL in the form `http://waitingrooms.dev/preview/<uuid>`. You can use the following query parameters to change the state of the preview:\n1. `force_queue`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website (also known as queueAll).\n2. `queue_is_full`: Boolean indicating if the waiting room\'s queue is currently full and not accepting new users at the moment.\n3. `queueing_method`: The queueing method currently used by the waiting room.\n\t- **fifo** indicates a FIFO queue.\n\t- **random** indicates a Random queue.\n\t- **passthrough** indicates a Passthrough queue. Keep in mind that the waiting room page will only be displayed if `force_queue=true` or `event=prequeueing` — for other cases the request will pass through to the origin. For our preview, this will be a fake origin website returning "Welcome". \n\t- **reject** indicates a Reject queue.\n4. `event`: Used to preview a waiting room event.\n\t- **none** indicates no event is occurring.\n\t- **prequeueing** indicates that an event is prequeueing (between `prequeue_start_time` and `event_start_time`).\n\t- **started** indicates that an event has started (between `event_start_time` and `event_end_time`).\n5. `shuffle_at_event_start`: Boolean indicating if the event will shuffle users in the prequeue when it starts. This can only be set to **true** if an event is active (`event` is not **none**).\n\nFor example, you can make a request to `http://waitingrooms.dev/preview/<uuid>?force_queue=false&queue_is_full=false&queueing_method=random&event=started&shuffle_at_event_start=true`\n6. `waitTime`: Non-zero, positive integer indicating the estimated wait time in minutes. The default value is 10 minutes.\n\nFor example, you can make a request to `http://waitingrooms.dev/preview/<uuid>?waitTime=50` to configure the estimated wait time as 50 minutes.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      custom_html: {
        type: 'string',
        description:
          'Only available for the Waiting Room Advanced subscription. This is a template html file that will be rendered at the edge. If no custom_page_html is provided, the default waiting room will be used. The template is based on mustache ( https://mustache.github.io/ ). There are several variables that are evaluated by the Cloudflare edge:\n1. {{`waitTimeKnown`}} Acts like a boolean value that indicates the behavior to take when wait time is not available, for instance when queue_all is **true**.\n2. {{`waitTimeFormatted`}} Estimated wait time for the user. For example, five minutes. Alternatively, you can use:\n3. {{`waitTime`}} Number of minutes of estimated wait for a user.\n4. {{`waitTimeHours`}} Number of hours of estimated wait for a user (`Math.floor(waitTime/60)`).\n5. {{`waitTimeHourMinutes`}} Number of minutes above the `waitTimeHours` value (`waitTime%60`).\n6. {{`queueIsFull`}} Changes to **true** when no more people can be added to the queue.\n\nTo view the full list of variables, look at the `cfWaitingRoom` object described under the `json_response_enabled` property in other Waiting Room API calls.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.waitingRooms.page.preview(body);
};

export default { metadata, tool, handler };
