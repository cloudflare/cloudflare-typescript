// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.crons',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_threat_events_cloudforce_one_crons',
  description: 'Reads the last cron update time',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.cloudforceOne.threatEvents.crons.edit(body);
};

export default { metadata, tool, handler };
