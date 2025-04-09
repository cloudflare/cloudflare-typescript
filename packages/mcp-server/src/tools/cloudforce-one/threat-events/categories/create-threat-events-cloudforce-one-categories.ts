// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.categories',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_threat_events_cloudforce_one_categories',
  description: 'Creates a new category',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID',
      },
      killChain: {
        type: 'number',
      },
      name: {
        type: 'string',
      },
      mitreAttack: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      shortname: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.cloudforceOne.threatEvents.categories.create(body);
};

export default { metadata, tool, handler };
