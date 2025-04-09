// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.tags',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_threat_events_cloudforce_one_tags',
  description: 'Creates a new tag',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.cloudforceOne.threatEvents.tags.create(body);
};

export default { metadata, tool, handler };
