// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_cloudforce_one_threat_events',
  description: 'Updates an event',
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
      attacker: {
        type: 'string',
      },
      attackerCountry: {
        type: 'string',
      },
      category: {
        type: 'string',
      },
      date: {
        type: 'string',
        format: 'date-time',
      },
      event: {
        type: 'string',
      },
      indicator: {
        type: 'string',
      },
      indicatorType: {
        type: 'string',
      },
      targetCountry: {
        type: 'string',
      },
      targetIndustry: {
        type: 'string',
      },
      tlp: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { event_id, ...body } = args;
  return client.cloudforceOne.threatEvents.edit(event_id, body);
};

export default { metadata, tool, handler };
