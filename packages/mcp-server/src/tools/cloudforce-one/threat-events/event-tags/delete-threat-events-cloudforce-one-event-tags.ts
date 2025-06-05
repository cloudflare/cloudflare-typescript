// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.event_tags',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}',
  operationId: 'delete_EventTagDelete',
};

export const tool: Tool = {
  name: 'delete_threat_events_cloudforce_one_event_tags',
  description: 'Removes a tag from an event',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      event_id: {
        type: 'string',
        description: 'Event UUID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_id, ...body } = args as any;
  return asTextContentResult(await client.cloudforceOne.threatEvents.eventTags.delete(event_id, body));
};

export default { metadata, tool, handler };
