// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_magic_transit_connectors',
  description: 'Replace Connector',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      connector_id: {
        type: 'string',
      },
      activated: {
        type: 'boolean',
      },
      interrupt_window_duration_hours: {
        type: 'number',
      },
      interrupt_window_hour_of_day: {
        type: 'number',
      },
      notes: {
        type: 'string',
      },
      timezone: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { connector_id, ...body } = args;
  return client.magicTransit.connectors.update(connector_id, body);
};

export default { metadata, tool, handler };
