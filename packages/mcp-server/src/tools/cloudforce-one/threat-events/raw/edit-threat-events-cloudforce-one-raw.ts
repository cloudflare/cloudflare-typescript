// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.raw',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}',
  operationId: 'patch_EventRawUpdate',
};

export const tool: Tool = {
  name: 'edit_threat_events_cloudforce_one_raw',
  description: 'Updates a raw event',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID.',
      },
      event_id: {
        type: 'string',
        description: 'Event UUID.',
      },
      raw_id: {
        type: 'string',
        description: 'Raw Event UUID.',
      },
      data: {
        type: 'object',
      },
      source: {
        type: 'string',
      },
      tlp: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { raw_id, ...body } = args as any;
  return client.cloudforceOne.threatEvents.raw.edit(raw_id, body);
};

export default { metadata, tool, handler };
