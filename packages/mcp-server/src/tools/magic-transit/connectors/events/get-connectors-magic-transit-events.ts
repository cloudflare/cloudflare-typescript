// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors.events',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_connectors_magic_transit_events',
  description: 'Get Event',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
      },
      connector_id: {
        type: 'string',
      },
      event_t: {
        type: 'number',
      },
      event_n: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { event_n, ...body } = args;
  return client.magicTransit.connectors.events.get(event_n, body);
};

export default { metadata, tool, handler };
