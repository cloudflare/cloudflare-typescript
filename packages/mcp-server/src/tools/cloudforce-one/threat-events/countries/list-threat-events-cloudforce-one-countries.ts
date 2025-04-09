// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.countries',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_threat_events_cloudforce_one_countries',
  description: 'Retrieves countries information for all countries',
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
  return client.cloudforceOne.threatEvents.countries.list(body);
};

export default { metadata, tool, handler };
