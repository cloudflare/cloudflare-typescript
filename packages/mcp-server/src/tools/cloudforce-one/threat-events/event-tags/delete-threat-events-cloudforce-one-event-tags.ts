// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.event_tags',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_threat_events_cloudforce_one_event_tags',
  description: 'Removes a tag from an event',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID',
      },
      event_id: {
        type: 'string',
        description: 'Event UUID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { event_id, ...body } = args;
  return client.cloudforceOne.threatEvents.eventTags.delete(event_id, body);
};

export default { metadata, tool, handler };
